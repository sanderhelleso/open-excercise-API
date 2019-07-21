import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { LoginUserDto, RegisterUserDto, UserDto } from './dto/user.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../../services/auth/auth.service';
import { QuotasService } from '../../services/quotas/quotas.service';
import { IQuota, IQuotaData } from '../../interfaces/quota.interface';

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
		const { email, name } = await this.usersService.register(registerUserDto);
		const payload = { email, name };

		return this.authService.sendUser(payload);
	}

	@Post('/login')
	async login(@Body() loginUserDto: LoginUserDto): Promise<UserDto> {
		const { _id, email, name } = await this.usersService.findByLogin(loginUserDto);
		const quota: IQuotaData = await this.quoatasService.createQuota(_id);

		const payload = { email, name, quota };

		return this.authService.sendUser(payload);
	}
}
