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
	cron.schedule('* * * * *', () => {
		const customers = Customer.find();
		console.log('Running CRON job');
	});
};
