import Excercise from './models/excercise.model';
import Muscle from './models/excercise.model';
import makeDataset from '../utils/makeDataset';

async function seed(): Promise<boolean> {
	console.log('Seeding data...');

	// deletes all before insert
	await Excercise.deleteMany({});

	const { excercises, muscles } = await makeDataset();

	for (const key in excercises) {
		await new Excercise(excercises[key]).save();
	}

	for (const key in muscles) {
		await new Muscle(muscles[key]).save();
	}

	console.log('Finished seeding, data is ready...');
	return Promise.resolve(true);
}

export default seed;
