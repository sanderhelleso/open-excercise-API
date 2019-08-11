import * as crypto from 'crypto';

export const genRandCode = (): string => {
	return crypto.randomBytes(20).toString('hex');
};
