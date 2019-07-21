import { Injectable, CanActivate, UseGuards, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import Quota from '../database/models/quota.model';

const PREFIX = 'ApiKey ';

@Injectable()
export class QuotaGuard implements CanActivate {
	async canActivate(context: ExcecutionContext): Promise<boolean> {
		const req = context.switchToHttp().getRequest();

		if (!req.headers.authorization) {
			return false;
		}

		const api_key = req.headers.authorization.split(PREFIX)[1];
		if (!api_key) {
			return false;
		}

		const quota = await Quota.findOne({ api_key });
		if (!quota) {
			return false;
		}

		if (!quota.requests_remaining) {
			return false;
		}

		quota.requests_remaining--;
		quota.save();

		return true;
	}
}
