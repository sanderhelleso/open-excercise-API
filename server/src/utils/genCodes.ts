import * as crypto from 'crypto';

export const genVerifyCode = (): string => {
	return crypto.randomBytes(20).toString('hex');
};
