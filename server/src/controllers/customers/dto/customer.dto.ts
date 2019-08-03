import * as Stripe from 'stripe';
import { IsString, IsNumber } from 'class-validator';

export class CreateCustomerDto implements Stripe.customers.ICustomerCreationOptions {
	@IsString() readonly email: string;
	@IsString() readonly source: string;
	@IsString() plan: string;
	@IsString() ccLast4: string;
}
