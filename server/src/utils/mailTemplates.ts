import * as Mailgen from 'mailgen';
import { IMailTemplate } from '../interfaces/mail-template.interface';
import { IPlanInfo } from '../interfaces/plan-info.interface';

const mailGenerator: Mailgen = new Mailgen({
	theme: 'salted',
	product: {
		name: 'Open Excercise API',
		link: 'https://github.com/sanderhelleso/open-excercise-API'
		//logo: 'https://raw.githubusercontent.com/sanderhelleso/open-excercise-API/master/client/src/img/logo.png'
	}
});

const makeTemplate = (email: any): IMailTemplate => {
	const template: IMailTemplate = {
		text: mailGenerator.generatePlaintext(email),
		html: mailGenerator.generate(email)
	};

	return template;
};

export const welcomeEmail = (name: string, verifyCode: string): IMailTemplate => {
	const email: any = {
		body: {
			name,
			intro: "Welcome to Open Excercise API! We're very excited to have you on board.",
			action: {
				instructions: 'To verify your account, please click here:',
				button: {
					color: '#139ff2',
					text: 'Confirm your account',
					link: `http://localhost:3000/verify-account?code=${verifyCode}`
				}
			},
			outro: "Need help, or have questions? Just reply to this email, we'd love to help."
		}
	};

	return makeTemplate(email);
};

export const resetPwEmail = (resetCode: string) => {
	const email: any = {
		body: {
			intro: 'You told us you forgot your password',
			action: {
				instructions: 'If you really did, click here to choose a new one:',
				button: {
					color: '#139ff2',
					text: 'Choose a new password',
					link: `http://localhost:3000/reset-password?code=${resetCode}`
				}
			},
			outro:
				"If you didn't mean to reset your password, then you can just ignore this email; your password will not change."
		}
	};

	return makeTemplate(email);
};

export const subscriptionReceiptEmail = (planInfo: IPlanInfo): IMailTemplate => {
	const email: any = {
		body: {
			intro: 'Your monthly subscription has been processed successfully.',
			table: {
				data: [
					{
						item: planInfo.name,
						price: planInfo.price
					}
				]
			},
			action: {
				instructions: 'You can check the status of your quota and more in your dashboard:',
				button: {
					color: '#139ff2',
					text: 'Go to Dashboard',
					link: 'https://github.com/sanderhelleso/open-excercise-API'
				}
			},
			outro: 'We thank you for your purchase.'
		}
	};

	return makeTemplate(email);
};
