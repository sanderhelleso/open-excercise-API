import * as mongoose from 'mongoose';

export interface IVerify extends mongoose.Document {
	userID: string;
	code: string;
}
