import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { IMuscle } from '../../interfaces/muscle.interface';
import { MusclesService } from '../../services/muscles/muscles.service';
import { QuotaGuard } from '../../guards/quoata.guard';

@UseGuards(new QuotaGuard())
@Controller('muscles')
export class MusclesController {
	constructor(private readonly musclesService: MusclesService) {}

	@Get()
	async findAll(): Promise<IMuscle[]> {
		return await this.musclesService.findAll();
	}

	@Get('/:name')
	async findByName(@Param('name') name: string): Promise<IMuscle> {
		return await this.musclesService.findByName(name);
	}
}
