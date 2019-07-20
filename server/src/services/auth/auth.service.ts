import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { sign } from 'jsonwebtoken';
import { IUserAuth } from '../../interfaces/user.interface';

@Injectable()
export class AuthService {
	constructor(private readonly userService: UsersService) {}

	signPayload(payload: any) {
		return sign(payload, 'secret', { expiresIn: '12h' });
	}

	async validateUser(payload: any) {
		return await this.userService.findByPayload(payload);
	}

	sendUser(payload: any): Promise<IUserAuth> {
		const token = this.signPayload(payload);
		return { ...payload, token };
	}
}
