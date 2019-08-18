import { Injectable } from '@nestjs/common';
import User from '../../database/models/user.model';
import Verify from '../../database/models/verify.model';
import ResetPW from '../../database/models/reset-pw.model';
import { IUser, IRegisterUser, ILoginUser } from '../../interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { QuotasService } from '../quotas/quotas.service';
import { CustomersService } from '../customers/customers.service';
import { UserDataDto } from '../../controllers/auth/dto/user.dto';
import { MailerService } from '../mailer/mailer.service';
import {
	INTERNAL_SERVER_ERR,
	FAILED_LOGIN_ERROR,
	FAILED_REGISTER_ERROR,
	DUPLICATE_REGISTER_ERROR
} from '../../errors/error-messages';
import { welcomeEmail, resetPwEmail } from '../../utils/mailTemplates';
import { genRandCode } from '../../utils/genCodes';
import { NOT_VERIFIED_ERROR, INVALID_VERIFY_CODE } from '../../errors/error-messages';

const SALT_ROUNDS = 10;
const DUPLICATE_ENTITY_CODE = 11000;

@Injectable()
export class UsersService {
	constructor(
		private readonly quotasService: QuotasService,
		private readonly customersService: CustomersService,
		private readonly mailerService: MailerService
	) {}

	async register(user: IRegisterUser): Promise<boolean> {
		const { password } = user;
		delete user.password;

		try {
			const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
			const newUser = { ...user, passwordHash };
			const { _id } = await new User(newUser).save();

			const code: string = genRandCode();
			Verify.create({ userID: _id, code });
			this.mailerService.sendMail(null, user.email, 'Welcome', welcomeEmail(user.name, code));

			return true;
		} catch ({ code }) {
			if (code === DUPLICATE_ENTITY_CODE) {
				throw DUPLICATE_REGISTER_ERROR;
			}

			throw FAILED_REGISTER_ERROR;
		}
	}

	async findByLogin(user: ILoginUser): Promise<IUser> {
		const { email, password } = user;

		try {
			const user = await User.findOne({ email });

			if (user) {
				const { passwordHash, verified } = user;

				if (!verified) {
					throw NOT_VERIFIED_ERROR;
				}

				const match = await bcrypt.compare(password, passwordHash);
				if (match) return user;
			}

			throw FAILED_LOGIN_ERROR;
		} catch (error) {
			throw error;
		}
	}

	async updateVerifyStatus(code: string): Promise<string> {
		const verifyRec = await Verify.findOne({ code });

		if (!verifyRec) {
			throw INVALID_VERIFY_CODE;
		}

		const { userID } = verifyRec;
		await User.updateOne({ _id: userID }, { verified: true });
		await Verify.deleteOne(verifyRec);

		return userID;
	}

	async createResetPwCode(email: string): Promise<boolean> {
		const user = await User.findOne({ email });

		if (user) {
			const resetPw = await ResetPW.findOne({ email });

			if (!resetPw) {
				const code: string = genRandCode();
				ResetPW.create({ email, code });
				this.mailerService.sendMail(null, user.email, 'Reset Password', resetPwEmail(code));
			}
		}

		return true;
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

	async updateUserData(userID: string, data: UserDataDto): Promise<boolean> {
		const user = await User.findOne({ _id: userID });

		if (user) {
			for (let k in data) user[k] = data[k];
			user.save();
			return true;
		}

		throw INTERNAL_SERVER_ERR;
	}

	async delete(userID: string): Promise<boolean> {
		try {
			await User.deleteOne({ _id: userID });
			await this.quotasService.delete(userID);
			await this.customersService.deleteCustomer(userID);

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
