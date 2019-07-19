import { Controller, Get } from '@nestjs/common';

@Controller('excercises')
export class ExcercisesController {
	@Get('/')
	findAll(): string {
		return 'all';
	}

	@Get('/id/:id')
	findByID(): string {
		return 'by id';
	}

	@Get('/muscle/:muscle')
	findByMuscle(): string {
		return 'by muscle';
	}

	@Get('/search')
	findBySearch(): string {
		return 'by search';
	}
}
