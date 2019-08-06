import * as mongoose from 'mongoose';

export interface ICustomer extends mongoose.Document {
	userID: string;
	stripeID: string;
	ccLast4: string;
	plan: string;
	invoice_mail: string;
	current_period_end: number;
	current_period_start: number;
}
