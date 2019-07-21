import { Injectable } from '@nestjs/common';
import Quota from '../../database/models/quota.model';
import { ICreateQuota, IQuotaData } from '../../interfaces/quota.interface';
import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';
import { IApiKey } from '../../interfaces/api-key.interface';

const MAX_REQUESTS = 1000 * 10;
const N_BYTES = 256;
const SALT_ROUNDS = 10;
const HASH_ALG = 'sha256';

@Injectable()
export class QuotasService {
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
			console.log(error);
			return null;
		}
	}

	private async generateApiKey(): IApiKey {
		const plain = crypto.createHash(HASH_ALG).update(crypto.randomBytes(N_BYTES)).digest('hex');
		const hashed = await bcrypt.hash(plain, SALT_ROUNDS);

		return { plain, hashed };
	}
}
