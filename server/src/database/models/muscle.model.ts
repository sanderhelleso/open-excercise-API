import * as mongoose from 'mongoose';
import { IMuscle } from '../../interfaces/muscle.interface';

const { Schema, model } = mongoose;

const MuscleSchema = new Schema({
	name: { type: String, required: true },
	excercises: { type: Number, required: true }
});

export default model<IMuscle>('Muscle', MuscleSchema);
