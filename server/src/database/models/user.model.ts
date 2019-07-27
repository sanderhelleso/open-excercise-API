import * as mongoose from 'mongoose';
import { IUser } from '../../interfaces/user.interface';

const { Schema, model } = mongoose;

const UserSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	passwordHash: { type: String, required: true },
	purpose: { type: String, required: true }
});

export default model<IUser>('User', UserSchema);
