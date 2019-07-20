import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExcercisesModule } from './modules/excercises.module';
import { MusclesController } from './controllers/muscles/muscles.controller';
import { MusclesService } from './services/muscles/muscles.service';
import { MusclesModule } from './modules/muscles.module';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';

@Module({
	imports: [ ExcercisesModule, MusclesModule ],
	controllers: [ AppController, UsersController ],
	providers: [ AppService, UsersService ]
})
export class AppModule {}
