import { Injectable } from '@nestjs/common';
import Quota from '../../database/models/quota.model';
import { ICreateQuota, IQuotaData } from '../../interfaces/quota.interface';
import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';
import { IApiKey } from '../../interfaces/api-key.interface';

const MAX_REQUESTS = 1000 * 10;
const N_BYTES = 256;
const HASH_ALG = 'sha256';

@Injectable()
export class QuotasService {
	async createQuota(userID: string): Promise<IQuotaData | boolean> {
		const { plain, hashed } = this.generateApiKey();

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
			return false;
		}
	}

	private generateApiKey(): IApiKey {
		const plain = crypto.createHash(HASH_ALG).update(crypto.randomBytes(N_BYTES)).digest('hex');
		const hashed = bcrypt.hash(plain, process.env.SALT_ROUNDS);

		return { plain, hashed };
	}
}
