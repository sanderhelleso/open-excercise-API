import * as mongoose from 'mongoose';

export interface IQuota extends mongoose.Document {
	api_key: string;
	requests_remaining: number;
	refilled_at: number;
	belongs_to: string;
}
