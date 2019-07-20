import { IsString, IsEmail } from 'class-validator';

export class RegisterUserDto {
	@IsString() readonly name: string;
	@IsEmail() readonly email: string;
	@IsString() readonly password: string;
	@IsString() readonly purpose: string;
}
