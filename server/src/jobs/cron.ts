import * as cron from 'node-cron';
import Customer from '../database/models/customer.model';

/*	# ┌────────────── second (optional)
	# │ ┌──────────── minute
	# │ │ ┌────────── hour
	# │ │ │ ┌──────── day of month
	# │ │ │ │ ┌────── month
	# │ │ │ │ │ ┌──── day of week
	# │ │ │ │ │ │
	# │ │ │ │ │ │
	# * * * * * *
*/

export const runJobs = () => {
	cron.schedule('* * * * *', async () => {
		const now = new Date().getTime();
		const customers = await Customer.find({ current_period_end: { $lt: now } });
		console.log('Running CRON job');

		console.log(customers);
	});
};
