import { Controller, Post, Body } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { UsersService } from '../../services/users/users.service';
import { IUser } from '../../interfaces/user.interface';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post('/register')
	async register(@Body() registerUserDto: RegisterUserDto): Promise<IUser> {
		return this.usersService.register(registerUserDto);
	}
}
