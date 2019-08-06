import { Injectable } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';
import { MailData } from '@sendgrid/helpers/classes/mail';
import { INTERNAL_SERVER_ERR } from '../../errors/error-messages';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const DEFAULT_FROM: string = 'noreply@openexapi.com';

@Injectable()
export class MailerService {
	sendMail(from: string | null, to: string, subject: string, text: string, html: string) {
		const msg: MailData = {
			from: from || DEFAULT_FROM,
			to,
			subject,
			text,
			html
		};

		try {
			sgMail.send(msg);
		} catch (error) {
			throw INTERNAL_SERVER_ERR;
		}
	}
}
