import * as Mailgen from 'mailgen';
import { IMailTemplate } from '../interfaces/mail-template.interface';

const mailGenerator: Mailgen = new Mailgen({
	theme: 'default',
	product: {
		// appears in header & footer of e-mails
		name: 'Open Excercise API',
		link: 'https://github.com/sanderhelleso/open-excercise-API'
		// optional product logo
		// logo: ''
	}
});

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

	const template: IMailTemplate = {
		text: mailGenerator.generatePlaintext(email),
		html: mailGenerator.generate(email)
	};

	return template;
};
