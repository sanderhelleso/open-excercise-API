import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExcercisesModule } from './modules/excercises.module';
import { MusclesModule } from './modules/muscles.module';
import { AuthModule } from './modules/auth.module';
import { QuotasModule } from './modules/quotas.module';

@Module({
	imports: [ ExcercisesModule, MusclesModule, AuthModule, QuotasModule ],
	controllers: [ AppController ],
	providers: [ AppService ]
})
export class AppModule {}
