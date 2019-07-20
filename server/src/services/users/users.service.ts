import { Injectable } from '@nestjs/common';
import User from '../../database/models/user.model';
import { IUser, IRegisterUser, ILoginUser } from '../../interfaces/user.interface';
import * as bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

@Injectable()
export class UsersService {
	async register(user: IRegisterUser): Promise<IUser | null> {
		const { password } = user;
		delete user.password;

		try {
			const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
			const newUser = { ...user, passwordHash };
			return await new User(newUser).save();
		} catch (error) {
			return null;
		}
	}

	async findByLogin(user: ILoginUser): Promise<IUser | null> {
		const { email, password } = user;

		try {
			const user = await User.findOne({ email });

			if (user) {
				const { passwordHash } = user;
				const match = await bcrypt.compare(password, passwordHash);

				return match ? user : null;
			}
		} catch (error) {
			return null;
		}
	}

	async findByPayload(payload: any) {
		const { email } = payload;
		return await User.findOne({ email });
	}
}
