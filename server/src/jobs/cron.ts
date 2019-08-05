import * as cron from 'node-cron';

// * * * * * *
// | | | | | |
// | | | | | day of week
// | | | | month
// | | | day of month
// | | hour
// | minute
// second ( optional )

export const runJobs = () => {
	cron.schedule('* * * * *', () => {
		console.log('Running CRON job');
	});
};
