import * as cron from 'node-cron';

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
		console.log('Running CRON job');
	});
};
