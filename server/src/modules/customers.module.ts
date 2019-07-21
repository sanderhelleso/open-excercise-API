import { Module } from '@nestjs/common';
import { CustomersController } from '../controllers/customers/customers.controller';
import { CustomersService } from '../services/customers/customers.service';

@Module({
	controllers: [ CustomersController ],
	providers: [ CustomersService ]
})
export class CustomersModule {}
