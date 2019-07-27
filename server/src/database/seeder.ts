import Excercise from './models/excercise.model';
import Muscle from './models/muscle.model';
import User from './models/user.model';
import Quota from './models/quota.model';
import makeDataset from '../utils/makeDataset';

async function seed(): Promise<boolean> {
	console.log('Seeding data...');

	// deletes all before insert
	await Excercise.deleteMany({});
	await Muscle.deleteMany({});
	await User.deleteMany({});
	await Quota.deleteMany({});

	const { excercises, muscles } = await makeDataset();

	try {
		for (const key in excercises) {
			await new Excercise(excercises[key]).save();
		}

		for (const key in muscles) {
			await new Muscle(muscles[key]).save();
		}

		await new User({
			name: 'john doe',
			email: 'johndoe@gmail.com',
			purpose: 'Fitness App',
			passwordHash: '$2b$10$X3Y2rBqHIQ5vDz87RCvOPO4IVHJvv0tuYzU6jVLa5/hy5/odM55x6'
		}).save();
	} catch (error) {
		console.log(error);
	}

	console.log('Finished seeding, data is ready...');
	return Promise.resolve(true);
}

export default seed;
