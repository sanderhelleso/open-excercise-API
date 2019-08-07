import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import Quota from '../../database/models/quota.model';
import { ICreateQuota, IQuotaData } from '../../interfaces/quota.interface';
import * as crypto from 'crypto';
import { INTERNAL_SERVER_ERR } from '../../errors/error-messages';
import { planQuotaLimits } from '../../utils/planMap';

const N_BYTES = 256;
const HASH_ALG = 'sha256';

@Injectable()
export class QuotasService {
	async findByBelongsTo(userID: string): Promise<IQuotaData | null> {
		try {
			const { api_key, requests_limit, requests_remaining, refilled_at } = await Quota.findOne({ userID });
			return { api_key, requests_limit, requests_remaining, refilled_at };
		} catch (error) {
			throw INTERNAL_SERVER_ERR;
		}
	}

	async createQuota(userID: string): Promise<IQuotaData | null> {
		const api_key: string = this.generateApiKey();
		const requests_limit: number = planQuotaLimits.individual;
		const refilled_at: number = new Date().getTime();

		const quota: ICreateQuota = {
			api_key,
			refilled_at,
			userID,
			requests_limit,
			requests_remaining: requests_limit
		};

		try {
			await new Quota(quota).save();
			delete quota.userID;

			return quota;
		} catch (error) {
			throw INTERNAL_SERVER_ERR;
		}
	}

	async updateKey(userID: string): Promise<string | null> {
		const quota = await Quota.findOne({ userID });
		if (quota) {
			const api_key = await this.generateApiKey();
			quota.api_key = api_key;
			await quota.save();

			return api_key;
		}

		throw INTERNAL_SERVER_ERR;
	}

	async delete(userID: string): Promise<boolean> {
		try {
			await Quota.deleteOne({ userID });
			return true;
		} catch (error) {
			throw INTERNAL_SERVER_ERR;
		}
	}

	private generateApiKey(): string {
		return crypto.createHash(HASH_ALG).update(crypto.randomBytes(N_BYTES)).digest('hex');
	}
}
