import { Module } from '@nestjs/common';
import { ExcercisesController } from '../controllers/excercises/excercises.controller';
import { ExcercisesService } from '../services/excercises/excercises.service';
import { Cache } from '../cache/create-cache';

@Module({
	imports: [ Cache ],
	controllers: [ ExcercisesController ],
	providers: [ ExcercisesService ]
})
export class ExcercisesModule {}
