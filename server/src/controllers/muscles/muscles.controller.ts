import { Controller, Get, Param } from '@nestjs/common';
import { IMuscle } from '../../interfaces/muscle.interface';
import { MusclesService } from '../../services/muscles/muscles.service';

@Controller('muscles')
export class MusclesController {
	constructor(private readonly musclesService: MusclesService) {}

	@Get()
	async findAll(): Promise<IMuscle[]> {
		return await this.musclesService.findAll();
	}
}
