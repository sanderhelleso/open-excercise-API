import Excercise from './models/excercise.model';
import makeDataset from '../utils/makeDataset';

async function seed(): Promise<boolean> {
	console.log('Seeding data...');

	// deletes all before insert
	await Excercise.deleteMany({});

	const excerciseDataset = await makeDataset();

	for (const key in excerciseDataset) {
		await new Excercise(excerciseDataset[key]).save();
	}

	console.log('Finished seeding, data is ready...');
	return Promise.resolve(true);
}

export default seed;
