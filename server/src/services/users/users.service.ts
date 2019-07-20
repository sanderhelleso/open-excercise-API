import { Injectable } from '@nestjs/common';
import User from '../../database/models/user.model';
import { IUser, IRegisterUser, ILoginUser } from '../../interfaces/user.interface';
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

	async login(user: ILoginUser): Promise<IUser> {
		const { email, password } = user;

		try {
			const user = await User.findOne({ email });

			if (user) {
				const { passwordHash } = user;
				const match = await bcrypt.compare(password, passwordHash);

				if (!match) {
					throw Error('No user found with those credentials');
				}

				return user;
			}
		} catch (error) {
			throw Error('No user found with those credentials');
		}
	}
}
