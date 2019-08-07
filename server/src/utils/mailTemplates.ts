import * as Mailgen from 'mailgen';
import { IMailTemplate } from '../interfaces/mail-template.interface';

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

export const welcomeEmail = (name: string): IMailTemplate => {
	const email: any = {
		body: {
			name,
			intro: "Welcome to Open Excercise API! We're very excited to have you on board.",
			action: {
				instructions: 'To verify your account, please click here:',
				button: {
					color: '#139ff2',
					text: 'Confirm your account',
					link: 'https://github.com/sanderhelleso/open-excercise-API'
				}
			},
			outro: "Need help, or have questions? Just reply to this email, we'd love to help."
		}
	};

	return makeTemplate(email);
};

export const confirmSubscriptionEmail = (): IMailTemplate => {
	const email: any = {
		body: {
			intro: 'Your monthly Open Excercise API subscription has been Your order has been renewed successfully.',
			action: {
				instructions:
					'Your quota has been renewed. You can check the status of your quota and more in your dashboard:',
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
