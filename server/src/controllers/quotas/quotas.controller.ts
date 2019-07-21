import { AuthGuard } from '@nestjs/passport';
import { Controller, Post, UseGuards, Get, Req } from '@nestjs/common';
import { QuotasService } from '../../services/quotas/quotas.service';
import { Request } from 'express';

@UseGuards(AuthGuard('jwt'))
@Controller('quotas')
export class QuotasController {
	constructor(private readonly quotasService: QuotasService) {}

	@Get('/new-key')
	async updateApiKey(@Req() { user }: Request): Promise<string | null> {
		return await this.quotasService.updateKey(user.id);
	}
}
