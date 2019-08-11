import * as mongoose from 'mongoose';

export interface IResetPW extends mongoose.Document {
	email: string;
	code: string;
}
