import { IsString, IsEmail, Validate } from 'class-validator';
import { IsPassword } from '../../../validators/IsPassword';

export class RegisterUserDto {
	@IsString() readonly name: string;
	@IsEmail() readonly email: string;
	@IsString() readonly purpose: string;

	@Validate(IsPassword) readonly password: string;
}

export class LoginUserDto {
	@IsEmail() readonly email: string;

	@Validate(IsPassword) readonly password: string;
}

export class UserDto {
	@IsEmail() readonly email: string;
	@IsString() readonly name: string;
	@IsString() readonly token: string;
}
