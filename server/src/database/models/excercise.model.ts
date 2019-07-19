import * as mongoose from 'mongoose';
import { IExcercise } from '../../interfaces/excercise.interface';

const { Schema, model } = mongoose;

const ExcerciseSchema = new Schema({
	name: { type: String, required: true },
	muscle: { type: String, required: true }
});

export default model<IExcercise>('Excercise', ExcerciseSchema);
