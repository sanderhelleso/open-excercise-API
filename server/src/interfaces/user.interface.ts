import * as mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
	name: string;
	email: string;
	passwordHash: string;
	purpose: string;
}
