import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('excercises')
export class ExcercisesController {
	@Get('/')
	findAll(): string {
		return 'all';
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
