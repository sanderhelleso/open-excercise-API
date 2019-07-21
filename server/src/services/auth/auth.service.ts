import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { sign } from 'jsonwebtoken';
import { IUserData, IUser } from '../../interfaces/user.interface';

@Injectable()
export class AuthService {
	constructor(private readonly userService: UsersService) {}

	async validateUser(payload: any): Promise<IUser> {
		return await this.userService.findByPayload(payload);
	}

	async updatePassword(password: string, userID: string): Promise<boolean> {
		return await this.userService.updatePassword(userID, password);
	}

	signPayload(payload: any) {
		return sign(payload, 'secret', { expiresIn: '12h' });
	}

	sendUser(payload: any): Promise<IUserData> {
		const token = this.signPayload(payload);
		return { ...payload, token };
	}
}
