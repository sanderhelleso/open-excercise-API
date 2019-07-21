import { Controller, Get, Param, Query, UseGuards, UseInterceptors, CacheInterceptor } from '@nestjs/common';
import { ExcercisesService } from '../../services/excercises/excercises.service';
import { IExcercise } from '../../interfaces/excercise.interface';
import { QuotaGuard } from '../../guards/quoata.guard';

@UseGuards(new QuotaGuard())
@Controller('excercises')
@UseInterceptors(CacheInterceptor)
export class ExcercisesController {
	constructor(private readonly excercisesService: ExcercisesService) {}

	@Get()
	async findAll(): Promise<IExcercise[]> {
		return await this.excercisesService.findAll();
	}

	@Get('/name/:name')
	async findByName(@Param('name') name: string): Promise<IExcercise> {
		return await this.excercisesService.findByName(name);
	}

	@Get('/muscle/:muscle')
	async findByMuscle(@Param('muscle') muscle: string): Promise<IExcercise[]> {
		return await this.excercisesService.findByMuscle(muscle);
	}

	@Get('/search')
	async findBySearch(@Query('keyword') keyword: string): Promise<IExcercise[]> {
		return await this.excercisesService.findBySearch(keyword);
	}
}
