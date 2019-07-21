import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth.module';
import { QuotasModule } from './modules/quotas.module';
import { ApiController } from './controllers/api/api.controller';
import { ApiModule } from './modules/api.module';

@Module({
	imports: [ AuthModule, QuotasModule, ApiModule ],
	controllers: [ AppController ],
	providers: [ AppService ]
})
export class AppModule {}
