import { Injectable } from '@nestjs/common';
import * as Stripe from 'stripe';
import { stripe } from '../../stripe/stripe';
import { CreateCustomerDto } from '../../controllers/customers/dto/customer.dto';
import planMap from '../../utils/planMap';
import Customer from '../../database/models/customer.model';
import User from '../../database/models/user.model';
import Quota from '../../database/models/quota.model';
import { FAILED_ADD_PLAN } from '../../errors/error-messages';
import planLimitsMap from '../../utils/planLimitsMap';
import { IQuotaDataAfterSub } from '../../interfaces/quota.interface';

@Injectable()
export class CustomersService {
	private readonly stripe: Stripe = stripe;

	async findAllCustomers(): Promise<Stripe.IList<Stripe.customers.ICustomer>> {
		const customers = await this.stripe.customers.list();
		return customers;
	}

	async findCustomer(id: string): Promise<Stripe.customers.ICustomer> {
		const customer = await this.stripe.customers.retrieve(id);
		return await customer;
	}

	async createCustomer(customerInfo: CreateCustomerDto, userID: string): Promise<IQuotaDataAfterSub> {
		try {
			const planID = customerInfo.plan;

			customerInfo.plan = planMap[planID];
			const { ccLast4 } = customerInfo;
			delete customerInfo.ccLast4;

			let customer = await Customer.findOne({ userID });

			if (!customer) {
				customer = new Customer({ userID });
			} else if (customer.plan === customerInfo.plan) {
				throw FAILED_ADD_PLAN;
			}

			let stripeID: string = customer.stripeID;
			let stripeCust: Stripe.customers.ICustomer = null;

			if (!stripeID) {
				stripeCust = await this.stripe.customers.create(customerInfo);
				stripeID = stripeCust.id;
			} else {
				stripeCust = await this.updateCustomer(stripeID, customerInfo);
			}

			const { subscriptions: { data } } = stripeCust;
			const { current_period_end, current_period_start } = data[0];
			const { email } = await User.findOne({ userID });

			// update customer
			customer.stripeID = stripeID;
			customer.ccLast4 = ccLast4;
			customer.plan = customerInfo.plan;
			customer.invoice_mail = email;
			customer.current_period_start = current_period_start;
			customer.current_period_end = current_period_end;
			await customer.save();

			// update quota to accomondate for plan changes
			const quota = await Quota.findOne({ userID });
			const used = quota.requests_limit - quota.requests_remaining;
			quota.requests_limit = planLimitsMap[planID];
			quota.requests_remaining = quota.requests_limit - used;
			await quota.save();

			return { requests_remaining: quota.requests_remaining, requests_limit: quota.requests_limit };
		} catch (error) {
			throw error;
		}
	}

	async updateCustomer(
		id: string,
		customerInfo: Stripe.customers.ICustomerUpdateOptions
	): Promise<Stripe.customers.ICustomer> {
		const customer = await this.stripe.customers.update(id, customerInfo);
		return customer;
	}

	async deleteCustomer(userID: string): Promise<Stripe.IDeleteConfirmation | boolean> {
		try {
			const customer = await Customer.findOne({ userID });

			if (customer) {
				await Customer.deleteOne({ userID });
				const deletetionConfirmation = await this.stripe.customers.del(customer.stripeID);
				return deletetionConfirmation;
			}

			return true;
		} catch (error) {
			throw error;
		}
	}
}
