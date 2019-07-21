import * as mongoose from 'mongoose';
import { IQuota } from '../../interfaces/quota.interface';

const { Schema, model } = mongoose;

const QuotaSchema = new Schema({
	api_key: { type: String, required: true },
	requests_remaining: { type: Number, required: true },
	refilled_at: { type: Number, required: true },
	belongs_to: { type: String, required: true }
});

export default model<IQuota>('Quota', QuotaSchema);
