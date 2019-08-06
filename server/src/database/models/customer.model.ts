import * as mongoose from 'mongoose';
import { ICustomer } from '../../interfaces/customer.interface';

const { Schema, model } = mongoose;

const CustomerSchema = new Schema({
	userID: { type: String, required: true, unique: true },
	stripeID: { type: String, required: true, unique: true },
	ccLast4: { type: String, required: true },
	plan: { type: String, required: true },
	renewsAt: { type: Number, required: true }
});

export default model<ICustomer>('Customer', CustomerSchema);
