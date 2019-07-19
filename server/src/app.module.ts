import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExcercisesController } from './excercises/excercises.controller';
import { ExcercisesController } from './controllers/excercises/excercises.controller';

@Module({
  imports: [],
  controllers: [AppController, ExcercisesController],
  providers: [AppService],
})
export class AppModule {}
