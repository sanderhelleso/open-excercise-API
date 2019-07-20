import Excercise from './models/excercise.model';
import Muscle from './models/muscle.model';
import User from './models/user.model';
import makeDataset from '../utils/makeDataset';

async function seed(): Promise<boolean> {
	console.log('Seeding data...');

	// deletes all before insert
	await Excercise.deleteMany({});

	const { excercises, muscles } = await makeDataset();

	try {
		for (const key in excercises) {
			await new Excercise(excercises[key]).save();
		}

		for (const key in muscles) {
			await new Muscle(muscles[key]).save();
		}

		await new User({
			name: 'John Doe',
			email: 'johndoe@gmail.com',
			passwordHash: 'qweqweqweqweqeqeadadqweqwe',
			purpose: 'Fitness App'
		}).save();
	} catch (error) {
		console.log(error);
	}

	console.log('Finished seeding, data is ready...');
	return Promise.resolve(true);
}

export default seed;
