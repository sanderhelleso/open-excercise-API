import { Controller, Get, Param, Query, UseGuards, UseInterceptors, CacheInterceptor } from '@nestjs/common';
import { ExcercisesService } from '../../services/excercises/excercises.service';
import { IExcercise } from '../../interfaces/excercise.interface';
import { QuotaGuard } from '../../guards/quoata.guard';
import { MusclesService } from '../../services/muscles/muscles.service';
import { IMuscle } from '../../interfaces/muscle.interface';

@UseGuards(new QuotaGuard())
@Controller('api')
@UseInterceptors(CacheInterceptor)
export class ApiController {
	constructor(
		private readonly excercisesService: ExcercisesService,
		private readonly musclesService: MusclesService
	) {}

	@Get('/excercises')
	async findExcercises(): Promise<IExcercise[]> {
		return await this.excercisesService.findAll();
	}

	@Get('/excercises/name/:name')
	async findExcercisesByName(@Param('name') name: string): Promise<IExcercise> {
		return await this.excercisesService.findByName(name);
	}

	@Get('/excercises/muscle/:muscle')
	async findExcercisesByMuscle(@Param('muscle') muscle: string): Promise<IExcercise[]> {
		return await this.excercisesService.findByMuscle(muscle);
	}

	@Get('/excercises/search')
	async findExcercisesBySearch(@Query('keyword') keyword: string): Promise<IExcercise[]> {
		return await this.excercisesService.findBySearch(keyword);
	}

	@Get('/muscles')
	async findMuscles(): Promise<IMuscle[]> {
		return await this.musclesService.findAll();
	}

	@Get('/muscles/name/:name')
	async findMusclesByName(@Param('name') name: string): Promise<IMuscle> {
		return await this.musclesService.findByName(name);
	}
}
