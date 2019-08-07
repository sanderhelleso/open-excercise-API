import * as cron from 'node-cron';
import Customer from '../database/models/customer.model';
import { ICustomer } from '../interfaces/customer.interface';
import { MailerService } from '../services/mailer/mailer.service';
import { subscriptionReceiptEmail } from '../utils/mailTemplates';
import { planInfo, planIDtoKey } from '../utils/planMap';

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
		runJobMsg(JOB_NAME);

		const now: number = new Date().getTime();
		const where: any = { current_period_end: { $lt: now } };
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
				subscriptionReceiptEmail(planInfo[planIDtoKey(plan)])
			);
		});
	});
};

const runJobMsg = (name: string) => {
	console.log(`${new Date().toISOString()} - Running job ${name}`);
};
