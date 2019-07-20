import * as mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
	name: string;
	email: string;
	passwordHash: string;
	purpose: string;
}

export interface IRegisterUser {
	name: string;
	email: string;
	password: string;
	purpose: string;
}
