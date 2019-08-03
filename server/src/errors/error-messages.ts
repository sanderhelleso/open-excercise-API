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

export const FAILED_ADD_PLAN = new HttpException(
	'You already have an active subscription to this plan',
	HttpStatus.CONFLICT
);
