import { Injectable } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';
import { MailData } from '@sendgrid/helpers/classes/mail';
import { INTERNAL_SERVER_ERR } from '../../errors/error-messages';
import { IMailTemplate } from '../../interfaces/mail-template.interface';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const DEFAULT_FROM: string = 'noreply@openexapi.com';

@Injectable()
export class MailerService {
	sendMail(from: string | null, to: string, subject: string, template: IMailTemplate) {
		const msg: MailData = {
			from: from || DEFAULT_FROM,
			to,
			subject,
			...template
		};

		try {
			sgMail.send(msg);
		} catch (error) {
			throw INTERNAL_SERVER_ERR;
		}
	}
}
