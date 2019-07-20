import { Module } from '@nestjs/common';
import { MusclesController } from '../controllers/muscles/muscles.controller';
import { MusclesService } from '../services/muscles/muscles.service';

@Module({
	imports: [],
	controllers: [ MusclesController ],
	providers: [ MusclesService ]
})
export class MusclesModule {}
