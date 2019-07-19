import * as mongoose from 'mongoose';

export interface IExcercise extends mongoose.Document {
	name: string;
	muscle: string;
}
