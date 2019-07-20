import { Controller, Post, Body } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('users')
export class UsersController {
	@Post('/register')
	async register(@Body() registerUserDto: RegisterUserDto): string {
		console.log(registerUserDto);
		return 'creating user';
	}
}
