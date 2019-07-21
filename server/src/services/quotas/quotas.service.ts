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
const SALT_ROUNDS = 10;
const HASH_ALG = 'sha256';

@Injectable()
export class QuotasService {
	async findByBelongsTo(userID: string): Promise<IQuotaData | null> {
		try {
			const { requests_remaining, refilled_at } = await Quota.findOne({ belongs_to: userID });
			return { api_key: 'qweqew', requests_remaining, refilled_at };
		} catch (error) {
			return null;
		}
	}

	async createQuota(userID: string): Promise<IQuotaData | null> {
		const { plain, hashed } = await this.generateApiKey();

		const quota: ICreateQuota = {
			api_key_hash: hashed,
			requests_remaining: MAX_REQUESTS,
			refilled_at: new Date().getTime(),
			belongs_to: userID
		};

		try {
			const { requests_remaining, refilled_at } = await new Quota(quota).save();
			return { api_key: plain, requests_remaining, refilled_at };
		} catch (error) {
			return null;
		}
	}

	async updateKey(userID: string): Promise<String | null> {
		const quota = Quota.findOne({ belongs_to: userID });
		if (quota) {
			const { plain, hashed } = await this.generateApiKey();
			quota.api_key_hash = hashed;
			await quota.save();

			return plain;
		}

		return null;
	}

	private async generateApiKey(): IApiKey {
		const plain = crypto.createHash(HASH_ALG).update(crypto.randomBytes(N_BYTES)).digest('hex');
		const hashed = await bcrypt.hash(plain, SALT_ROUNDS);

		return { plain, hashed };
	}
}
