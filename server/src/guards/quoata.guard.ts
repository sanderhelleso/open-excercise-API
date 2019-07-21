import { Injectable, CanActivate, UseGuards, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import Quota from '../database/models/quota.model';

const PREFIX = 'ApiKey ';

const NO_KEY_ERROR = new HttpException('No API key provided', HttpStatus.UNAUTHORIZED);
const INVALID_KEY_ERROR = new HttpException('Invalid API key provided', HttpStatus.UNAUTHORIZED);
const REQUEST_LIMIT_ERROR = new HttpException('Request limit has been exceeded', HttpStatus.UNAUTHORIZED);

@Injectable()
export class QuotaGuard implements CanActivate {
	async canActivate(context: ExcecutionContext): Promise<boolean> {
		const req = context.switchToHttp().getRequest();

		if (!req.headers.authorization) {
			throw NO_KEY_ERROR;
		}

		const api_key = req.headers.authorization.split(PREFIX)[1];
		if (!api_key) {
			throw NO_KEY_ERROR;
		}

		const quota = await Quota.findOne({ api_key });
		if (!quota) {
			throw INVALID_KEY_ERROR;
		}

		if (!quota.requests_remaining) {
			throw REQUEST_LIMIT_ERROR;
		}

		quota.requests_remaining--;
		quota.save();

		return true;
	}
}