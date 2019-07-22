import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth.module';
import { QuotasModule } from './modules/quotas.module';
import { ApiModule } from './modules/api.module';
import { CustomersModule } from './modules/customers.module';
import { AppGateway } from './app.gateway';

@Module({
	imports: [ AuthModule, QuotasModule, ApiModule, CustomersModule ],
	controllers: [ AppController ],
	providers: [ AppService, AppGateway ]
})
export class AppModule {}
