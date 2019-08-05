import { Controller, Post, Body, Get, UseGuards, Req, Patch, Delete } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { LoginUserDto, RegisterUserDto, UserDto, UserDataDto } from './dto/user.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../../services/auth/auth.service';
import { QuotasService } from '../../services/quotas/quotas.service';
import { IQuotaData } from '../../interfaces/quota.interface';
import { PasswordDto } from './dto/password.dto';
import { User } from '../../decorators/user.decorator';
import { IReqUser } from '../../interfaces/user.interface';

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
		const payload = { quota, email, name, _id };

		return this.authService.sendUser(payload);
	}

	@Post('/login')
	async login(@Body() loginUserDto: LoginUserDto): Promise<UserDto> {
		const { _id, email, name } = await this.usersService.findByLogin(loginUserDto);
		const quota: IQuotaData = await this.quoatasService.findByBelongsTo(_id);

		const payload = { email, name, quota };

		return this.authService.sendUser(payload);
	}

	@Patch('/update-data')
	@UseGuards(AuthGuard('jwt'))
	async updateData(@Body() body: UserDataDto, @User() { id }: IReqUser): Promise<boolean> {
		return await this.usersService.updateUserData(id, body);
	}

	@Patch('/update-password')
	@UseGuards(AuthGuard('jwt'))
	async updatePassword(@Body() { password }: PasswordDto, @User() { id }: IReqUser): Promise<boolean> {
		return await this.usersService.updatePassword(id, password);
	}

	@Delete('/delete')
	@UseGuards(AuthGuard('jwt'))
	async delete(@Req() { user }: any): Promise<boolean> {
		return await this.usersService.delete(user.id);
	}
}
