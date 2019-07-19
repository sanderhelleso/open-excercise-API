import { Module } from '@nestjs/common';
import { ExcercisesController } from '../controllers/excercises/excercises.controller';
import { ExcercisesService } from '../services/excercises/excercises.service';

@Module({
	imports: [],
	controllers: [ ExcercisesController ],
	providers: [ ExcercisesService ]
})
export class ExcercisesModule {}
