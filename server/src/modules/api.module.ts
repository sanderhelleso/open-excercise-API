import { Module } from '@nestjs/common';
import { ApiController } from '../controllers/api/api.controller';
import { Cache } from '../cache/create-cache';
import { ExcercisesService } from '../services/excercises/excercises.service';
import { MusclesService } from '../services/muscles/muscles.service';

@Module({
	imports: [ Cache ],
	controllers: [ ApiController ],
	providers: [ MusclesService, ExcercisesService ]
})
export class ApiModule {}
