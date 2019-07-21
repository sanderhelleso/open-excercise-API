import { Controller, Post, Body, Get, UseGuards, Req, Patch, Delete } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { LoginUserDto, RegisterUserDto, UserDto } from './dto/user.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../../services/auth/auth.service';
import { QuotasService } from '../../services/quotas/quotas.service';
import { IQuotaData } from '../../interfaces/quota.interface';
import { PasswordDto } from './dto/password.dto';

@Controller('auth')
export class AuthController {
	constructor(
		private readonly usersService: UsersService,
		private readonly authService: AuthService,
		private readonly quoatasService: QuotasService
	) {}

	@Get()
	@UseGuards(AuthGuard('jwt'))
	tempAuth() {
		return { auth: 'works' };
	}

	@Post('/register')
	async register(@Body() registerUserDto: RegisterUserDto): Promise<UserDto> {
		const { _id, email, name } = await this.usersService.register(registerUserDto);
		const quota: IQuotaData = await this.quoatasService.createQuota(_id);
		const payload = { quota, email, name };

		return this.authService.sendUser(payload);
	}

	@Post('/login')
	async login(@Body() loginUserDto: LoginUserDto): Promise<UserDto> {
		const { _id, email, name } = await this.usersService.findByLogin(loginUserDto);
		const quota: IQuotaData = await this.quoatasService.findByBelongsTo(_id);

		const payload = { email, name, quota };

		return this.authService.sendUser(payload);
	}

	@Patch('/update-password')
	@UseGuards(AuthGuard('jwt'))
	async updatePassword(@Body() { password }: PasswordDto, @Req() { user }: any): Promise<boolean> {
		return await this.usersService.updatePassword(password, user.id);
	}

	@Delete('/delete')
	@UseGuards(AuthGuard('jwt'))
	async delete(@Req() { user }: any): Promise<boolean> {
		return await this.usersService.delete(user.id);
	}
}
