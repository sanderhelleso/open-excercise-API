import * as mongoose from 'mongoose';

export interface IQuota extends mongoose.Document {
	api_key: string;
	requests_limit: number;
	requests_remaining: number;
	refilled_at: number;
	userID: string;
}

export interface ICreateQuota {
	api_key: string;
	requests_limit: number;
	requests_remaining: number;
	refilled_at: number;
	userID: string;
}

export interface IQuotaData {
	api_key: string;
	requests_limit: number;
	requests_remaining: number;
	refilled_at: number;
}

export interface IQuotaDataAfterSub {
	requests_limit: number;
	requests_remaining: number;
}
