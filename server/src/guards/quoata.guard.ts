import { Injectable, CanActivate, UseGuards, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import Quota from '../database/models/quota.model';

@Injectable()
export class QuotaGuard implements CanActivate {
	async canActivate(context: ExcecutionContext): Promise<boolean> {
		const req = context.switchToHttp().getRequest();

		console.log(req.headers);

		const { id } = req.user;
		const quota = await Quota.findOne({ belongs_to: id });

		if (!quota.requests_remaining) {
			return false;
		}

		quota.requests_remaining--;
		quota.save();

		return true;
	}
}
