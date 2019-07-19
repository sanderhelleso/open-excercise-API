import { Controller, Get, Param, Query } from '@nestjs/common';
import { ExcercisesService } from '../../services/excercises/excercises.service';
import { IExcercise } from '../../interfaces/excercise.interface';

@Controller('excercises')
export class ExcercisesController {
	constructor(private readonly excercisesService: ExcercisesService) {}

	@Get()
	async findAll(): Promise<IExcercise[]> {
		return await this.excercisesService.findAll();
	}

	@Get('/id/:id')
	findByID(@Param('id') id: string): string {
		return `By id: ${id}`;
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
