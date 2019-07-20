import { Injectable } from '@nestjs/common';
import User from '../../database/models/user.model';
import { IUser, IRegisterUser } from '../../interfaces/user.interface';
import * as bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

@Injectable()
export class UsersService {
	async register(user: IRegisterUser): Promise<IUser> {
		const { password } = user;
		delete user.password;

		try {
			const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
			const newUser = { ...user, passwordHash };
			return await new User(newUser).save();
		} catch (error) {
			throw Error('Failed to create user');
		}
	}
}
