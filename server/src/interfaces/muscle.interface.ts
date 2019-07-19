import * as mongoose from 'mongoose';

export interface IMuscle extends mongoose.Document {
	name: string;
	excercises: number;
}
