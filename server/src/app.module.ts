import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExcercisesModule } from './modules/excercises.module';
import { MusclesModule } from './modules/muscles.module';
import { AuthModule } from './modules/auth.module';
import { QuotasService } from './services/quotas/quotas.service';

@Module({
	imports: [ ExcercisesModule, MusclesModule, AuthModule ],
	controllers: [ AppController ],
	providers: [ AppService, QuotasService ]
})
export class AppModule {}
