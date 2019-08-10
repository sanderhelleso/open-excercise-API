import * as mongoose from 'mongoose';
import { IQuotaData } from './quota.interface';

export interface IUser extends mongoose.Document {
	name: string;
	email: string;
	passwordHash: string;
	purpose: string;
	verified: boolean;
}

export interface IRegisterUser {
	name: string;
	email: string;
	password: string;
	purpose: string;
}

export interface ILoginUser {
	email: string;
	password: string;
}

export interface IUserData {
	email: string;
	name: string;
	token: string;
	quota: IQuotaData;
}

export interface IReqUser {
	id: string;
}
