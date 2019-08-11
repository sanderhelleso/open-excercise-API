import * as mongoose from 'mongoose';
import { IResetPW } from '../../interfaces/reset-pw.interface';

const { Schema, model } = mongoose;

const ResetPwSchema = new Schema({
	email: { type: String, required: true, unique: true },
	code: { type: String, required: true }
});

export default model<IResetPW>('ResetPW', ResetPwSchema);
