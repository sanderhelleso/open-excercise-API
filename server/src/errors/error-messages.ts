import { HttpException, HttpStatus } from '@nestjs/common';

export const INTERNAL_SERVER_ERR = new HttpException(
	'This is our fault. We were unable to perform the requested action.',
	HttpStatus.INTERNAL_SERVER_ERROR
);

export const FAILED_REGISTER_ERROR = new HttpException(
	'We were unable to create your new account at this moment. Please try again',
	HttpStatus.INTERNAL_SERVER_ERROR
);

export const DUPLICATE_REGISTER_ERROR = new HttpException(
	'An account with that e-mail already exists',
	HttpStatus.CONFLICT
);

export const FAILED_LOGIN_ERROR = new HttpException(
	'No user matching those credentials were found',
	HttpStatus.UNAUTHORIZED
);

export const NOT_VERIFIED_ERROR = new HttpException(
	'This account is waiting to be verified. Please follow the instructions sent to the registered email',
	HttpStatus.FORBIDDEN
);

export const INVALID_VERIFY_CODE = new HttpException(
	'Invalid verification code. Please follow the instructions sent to the registered email',
	HttpStatus.UNAUTHORIZED
);

export const FAILED_ADD_PLAN = new HttpException(
	'You already have an active subscription to this plan',
	HttpStatus.CONFLICT
);
