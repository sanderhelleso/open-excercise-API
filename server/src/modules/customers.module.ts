import { Module } from '@nestjs/common';
import { CustomersController } from '../controllers/customers/customers.controller';
import { CustomersService } from '../services/customers/customers.service';
import { MailerService } from '../services/mailer/mailer.service';

@Module({
	controllers: [ CustomersController ],
	providers: [ CustomersService, MailerService ]
})
export class CustomersModule {}
