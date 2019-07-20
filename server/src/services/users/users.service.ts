import { Injectable } from '@nestjs/common';
import User from '../../database/models/user.model';
import { IUser, IRegisterUser } from '../../interfaces/user.interface';
import bcrypt from 'bcrypt';

const SALT_ROUNTDS = 10;

@Injectable()
export class UsersService {
	async register(user: IRegisterUser): Promise<IUser> {
		const { password } = user;
		delete user.password;

		const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

		try {
			const newUser = { ...user, passwordHash };
			console.log(newUser);
			return await new User(newUser).save();
		} catch (error) {
			throw Error('Failed to create user');
		}
	}
}
