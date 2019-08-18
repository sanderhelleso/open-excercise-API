import Excercise from './models/excercise.model';
import Muscle from './models/muscle.model';
import User from './models/user.model';
import Quota from './models/quota.model';
import Customer from './models/customer.model';
import Verify from './models/verify.model';
import ResetPW from './models/reset-pw.model';
import makeDataset from '../utils/makeDataset';

async function seed(): Promise<boolean> {
	console.log('Seeding data...');

	// deletes all before insert
	await Excercise.deleteMany({});
	await Muscle.deleteMany({});
	await User.deleteMany({});
	await Quota.deleteMany({});
	await Customer.deleteMany({});
	await Verify.deleteMany({});
	await ResetPW.deleteMany({});

	const { excercises, muscles } = await makeDataset();

	try {
		for (const key in excercises) {
			await new Excercise(excercises[key]).save();
		}

		for (const key in muscles) {
			await new Muscle(muscles[key]).save();
		}
	} catch (error) {
		console.log(error);
	}

	console.log('Finished seeding, data is ready...');
	return Promise.resolve(true);
}

export default seed;
