import { Injectable } from '@nestjs/common';
import * as Stripe from 'stripe';
import { stripe } from '../../stripe/stripe';
import { CreateCustomerDto } from '../../controllers/customers/dto/customer.dto';
import planMap from '../../utils/planMap';
import Customer from '../../database/models/customer.model';
import { ICustomer } from '../../interfaces/customer.interface';

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

	async createCustomer(customerInfo: CreateCustomerDto, userID: string): Promise<boolean> {
		try {
			let customer = await Customer.findOne({ userID });
			if (!customer) customer = new Customer({ userID });

			const { ccLast4 } = customerInfo;
			delete customerInfo.ccLast4;

			let stripeID: string = customer.stripeID;
			customerInfo.plan = planMap[customerInfo.plan];

			if (!stripeID) {
				const { id } = await this.stripe.customers.create(customerInfo);
				stripeID = id;
			} else {
				await this.updateCustomer(stripeID, customerInfo);
			}

			customer.stripeID = stripeID;
			customer.ccLast4 = ccLast4;
			customer.plan = customerInfo.plan;
			await customer.save();
		} catch (error) {
			throw new Error('Unable to add plan subscription');
		}

		return true;
	}

	async updateCustomer(
		id: string,
		customerInfo: Stripe.customers.ICustomerUpdateOptions
	): Promise<Stripe.customers.ICustomer> {
		const customer = await this.stripe.customers.update(id, customerInfo);
		return customer;
	}

	async deleteCustomer(id: string): Promise<Stripe.IDeleteConfirmation> {
		const deletetionConfirmation = await this.stripe.customers.del(id);
		return deletetionConfirmation;
	}
}
