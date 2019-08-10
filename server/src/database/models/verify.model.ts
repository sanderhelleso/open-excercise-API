import * as mongoose from 'mongoose';
import { IVerify } from '../../interfaces/verify.interface';

const { Schema, model } = mongoose;

const VerifySchema = new Schema({
	userID: { type: String, required: true },
	code: { type: String, required: true }
});

export default model<IVerify>('Verify', VerifySchema);
