import { Module } from '@nestjs/common';
import { ApiController } from '../controllers/api/api.controller';
import { Cache } from '../cache/create-cache';
import { ExcercisesService } from '../services/excercises/excercises.service';
import { MusclesService } from '../services/muscles/muscles.service';
import { AnalyticsGateway } from '../analytics.gateway';

@Module({
	imports: [ Cache ],
	controllers: [ ApiController ],
	providers: [ MusclesService, ExcercisesService, AnalyticsGateway ]
})
export class ApiModule {}
