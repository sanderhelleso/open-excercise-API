import * as mongoose from 'mongoose';

export interface ICustomer extends mongoose.Document {
	userID: string;
	stripeID: string;
	ccLast4: string;
	plan: string;
}
