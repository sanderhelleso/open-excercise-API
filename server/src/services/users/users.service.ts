import { Injectable } from '@nestjs/common';
import User from '../../database/models/user.model';
import { IUser, IRegisterUser, ILoginUser } from '../../interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { QuotasService } from '../quotas/quotas.service';
import { INTERNAL_SERVER_ERR, FAILED_LOGIN_ERROR, FAILED_REGISTER_ERROR } from '../../errors/error-messages';

const SALT_ROUNDS = 10;

@Injectable()
export class UsersService {
	constructor(private readonly quotasService: QuotasService) {}

	async register(user: IRegisterUser): Promise<IUser> {
		console.log(user);

		const { password } = user;
		delete user.password;

		try {
			const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
			const newUser = { ...user, passwordHash };
			return await new User(newUser).save();
		} catch (error) {
			throw FAILED_REGISTER_ERROR;
		}
	}

	async findByLogin(user: ILoginUser): Promise<IUser> {
		const { email, password } = user;

		try {
			const user = await User.findOne({ email });

			if (user) {
				const { passwordHash } = user;
				const match = await bcrypt.compare(password, passwordHash);

				if (match) return user;
			}

			throw new Error();
		} catch (error) {
			throw FAILED_LOGIN_ERROR;
		}
	}

	async updatePassword(userID: string, password: string): Promise<boolean> {
		const user = await User.findOne({ _id: userID });
		if (user) {
			const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
			user.passwordHash = passwordHash;
			return true;
		}

		throw INTERNAL_SERVER_ERR;
	}

	async delete(userID: string): Promise<boolean> {
		try {
			await User.deleteOne({ _id: userID });
			await this.quotasService.delete(userID);
			return true;
		} catch (error) {
			throw INTERNAL_SERVER_ERR;
		}
	}

	async findByPayload(payload: any) {
		const { email } = payload;
		return await User.findOne({ email });
	}
}
