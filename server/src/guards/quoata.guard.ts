import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus, Inject } from '@nestjs/common';

import Quota from '../database/models/quota.model';
import { AnalyticsGateway } from '../analytics.gateway';

const PREFIX = 'Bearer ';

const NO_KEY_ERROR = new HttpException('No API key provided', HttpStatus.UNAUTHORIZED);
const INVALID_KEY_ERROR = new HttpException('Invalid API key provided', HttpStatus.UNAUTHORIZED);
const REQUEST_LIMIT_ERROR = new HttpException('Request limit has been exceeded', HttpStatus.UNAUTHORIZED);

@Injectable()
export class QuotaGuard implements CanActivate {
	constructor(@Inject('AnalyticsGateway') private readonly analyticsGateway: AnalyticsGateway) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const req = context.switchToHttp().getRequest();

		if (req.get('host') === 'localhost:4000') {
			return true;
		}

		if (!req.headers.authorization) {
			throw NO_KEY_ERROR;
		}

		const api_key = req.headers.authorization.split(PREFIX)[1].trim();
		if (!api_key.trim) {
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

		this.analyticsGateway.emitAnalyticsPayload(quota.api_key, quota.requests_remaining);

		return true;
	}
}
