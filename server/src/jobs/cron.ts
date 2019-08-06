import * as cron from 'node-cron';
import Customer from '../database/models/customer.model';
import { ICustomer } from '../../dist/interfaces/customer.interface';

const ONE_MONTH: number = 2592000000;

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
	updateInvoices();
};

const updateInvoices = () => {
	const JOB_NAME: string = 'UPDATE INVOICES';

	cron.schedule('* * * * *', async () => {
		runJobMsg(JOB_NAME);

		const now: number = new Date().getTime();
		const customers: ICustomer[] = await Customer.find({ current_period_end: { $lt: now } });

		customers.forEach(async (customer: ICustomer) => {
			const { invoice_mail, current_period_end } = customer;

			// send email here
			console.log(`Sending new invoice email to ${invoice_mail}`);

			customer.current_period_start = current_period_end;
			customer.current_period_end = current_period_end + ONE_MONTH;
			customer.save();
		});
	});
};

const runJobMsg = (name) => {
	console.log(`${new Date().toLocaleDateString()} - Running job ${name}`);
};
