import { Controller, Get, Param, Query } from '@nestjs/common';
import { ExcercisesService } from '../../services/excercises/excercises.service';
import { IExcercise } from '../../interfaces/excercise.interface';

@Controller('excercises')
export class ExcercisesController {
	constructor(private readonly excercisesService: ExcercisesService) {}

	@Get()
	async findAll(): Promise<IExcercise[]> {
		return this.excercisesService.findAll();
	}

	@Get('/id/:id')
	findByID(@Param('id') id: string): string {
		return `By id: ${id}`;
	}

	@Get('/muscle/:muscle')
	findByMuscle(@Param('muscle') muscle: string): string {
		return `by muscle ${muscle}`;
	}

	@Get('/search')
	findBySearch(@Query('keyword') keyword: string): string {
		return `by search ${keyword}`;
	}
}
