import { Injectable } from '@nestjs/common';
import Quota from '../../database/models/quota.model';
import { ICreateQuota, IQuotaData } from '../../interfaces/quota.interface';
import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';
import { IApiKey } from '../../interfaces/api-key.interface';
import { IQuota } from '../../../dist/interfaces/quota.interface';
import { IApiKey } from '../../../dist/interfaces/api-key.interface';

const MAX_REQUESTS = 1000 * 10;
const N_BYTES = 256;
const HASH_ALG = 'sha256';

@Injectable()
export class QuotasService {
	async findByBelongsTo(userID: string): Promise<IQuotaData | null> {
		try {
			const { api_key, requests_remaining, refilled_at } = await Quota.findOne({ belongs_to: userID });
			return { api_key, requests_remaining, refilled_at };
		} catch (error) {
			return null;
		}
	}

	async createQuota(userID: string): Promise<IQuotaData | null> {
		const api_key: string = this.generateApiKey();
		const requests_remaining: number = MAX_REQUESTS;
		const refilled_at: number = new Date().getTime();

		const quota: ICreateQuota = {
			api_key,
			requests_remaining,
			refilled_at,
			belongs_to: userID
		};

		try {
			await new Quota(quota).save();
			delete quota.belongs_to;

			return quota;
		} catch (error) {
			return null;
		}
	}

	async updateKey(userID: string): Promise<String | null> {
		const quota = Quota.findOne({ belongs_to: userID });
		if (quota) {
			const api_key = await this.generateApiKey();
			quota.api_key = api_key;
			await quota.save();

			return api_key;
		}

		return null;
	}

	private generateApiKey(): string {
		return crypto.createHash(HASH_ALG).update(crypto.randomBytes(N_BYTES)).digest('hex');
	}
}
