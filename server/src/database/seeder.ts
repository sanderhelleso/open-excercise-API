import Excercise from './models/Excercise';
import makeDataset from '../utils/makeDataset';

function seed() {
	console.log('Seeding data...');

	// deletes all before insert
	Excercise.deleteMany({});

	const excerciseDataset = makeDataset();

	for (const key in excerciseDataset) {
		new Excercise(excerciseDataset[key]).save();
	}

	console.log('Finished seeding, data is ready...');
}

export default seed;
