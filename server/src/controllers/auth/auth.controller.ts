import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { LoginUserDto, RegisterUserDto, UserDto } from './dto/user.dto';
import { IUser } from '../../interfaces/user.interface';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../../services/auth/auth.service';

@Controller('auth')
export class AuthController {
	constructor(private readonly usersService: UsersService, private readonly authService: AuthService) {}

	@Get()
	@UseGuards(AuthGuard('jwt'))
	tempAuth() {
		return { auth: 'works' };
	}

	@Post('/register')
	async register(@Body() registerUserDto: RegisterUserDto): Promise<IUser> {
		return this.usersService.register(registerUserDto);
	}

	@Post('/login')
	async login(@Body() loginUserDto: LoginUserDto): Promise<UserDto> {
		const { email, name } = await this.usersService.findByLogin(loginUserDto);
		const payload = { email, name };

		return this.authService.sendUser(payload);
	}
}
