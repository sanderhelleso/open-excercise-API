import * as mongoose from 'mongoose';

const { Schema, model } = mongoose;

interface IExcercise extends mongoose.Document {
	name: string;
	muscle: string;
}

const ExcerciseSchema = new Schema({
	name: { type: String, required: true },
	muscle: { type: String, required: true }
});

export default model<IExcercise>('Excercise', ExcerciseSchema);
