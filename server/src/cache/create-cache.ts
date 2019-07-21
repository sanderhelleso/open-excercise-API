import { DynamicModule, CacheModule } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';

const ONE_DAY: number = 86400;
const MAX_KEYS: number = 20;

export const Cache: DynamicModule = CacheModule.register({
	store: redisStore,
	host: process.env.REDIS_HOST,
	port: process.env.REDIS_PORT,
	ttl: ONE_DAY,
	max: MAX_KEYS
});
