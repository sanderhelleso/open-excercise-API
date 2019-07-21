import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';

import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(private authService: AuthService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: 'secret'
		});
	}

	async validate(payload: any, done: VerifiedCallback) {
		const user = await this.authService.validateUser(payload);

		if (!user) {
			return done(new HttpException('Unathorized access', HttpStatus.UNAUTHORIZED), false);
		}

		return done(null, { id: user._id }, payload.iat);
	}
}
