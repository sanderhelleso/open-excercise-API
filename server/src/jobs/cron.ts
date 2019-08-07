import * as cron from 'node-cron';
import Customer from '../database/models/customer.model';
import { ICustomer } from '../interfaces/customer.interface';
import { MailerService } from '../services/mailer/mailer.service';
import { subscriptionReceiptEmail } from '../utils/mailTemplates';
import { planInfo } from '../utils/planMap';

const ONE_MONTH: number = 2592000000;
const mailer = new MailerService();

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
	updateInvoices(); // every 12 hour
};

const updateInvoices = () => {
	const JOB_NAME: string = 'UPDATE INVOICES';

	cron.schedule('0 0 */12 * *', async () => {
		const now: Date = new Date();
		runJobMsg(now, JOB_NAME);

		try {
			const where: any = { current_period_end: { $lt: now.getTime() } };
			const customers: ICustomer[] = await Customer.find(where);

			customers.forEach(async (customer: ICustomer) => {
				const { invoice_mail, current_period_end, plan } = customer;

				customer.current_period_start = current_period_end;
				customer.current_period_end = current_period_end + ONE_MONTH;
				customer.save();

				mailer.sendMail(
					null,
					invoice_mail,
					'Subscription confirmation',
					subscriptionReceiptEmail(planInfo[plan])
				);
			});
		} catch (error) {
			// todo: add some logging cause it is super
			// important that it does NOT fail on this one,
			// and if it does we need to get error reason asap
			console.log(error);
		}
	});
};

const runJobMsg = (date: Date, name: string) => {
	console.log(`${date.toISOString()} - Running job ${name}`);
};
