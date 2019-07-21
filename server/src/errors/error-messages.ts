import { HttpException, HttpStatus } from '@nestjs/common';

export const INTERNAL_SERVER_ERR = new HttpException(
	'This is our fault. We were unable to perform the requested action.',
	HttpStatus.INTERNAL_SERVER_ERROR
);

export const FAILED_REGISTER_ERROR = new HttpException(
	'We were unable to create your new account at this moment. Please try again',
	HttpStatus.INTERNAL_SERVER_ERROR
);

export const FAILED_LOGIN_ERROR = new HttpException(
	'No user matching those credentials were found',
	HttpStatus.UNAUTHORIZED
);
