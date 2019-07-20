import { IsString } from 'class-validator';

export class RegisterUserDto {
	@IsString() readonly name: string;
	@IsString() readonly email: string;
	@IsString() readonly password: string;
	@IsString() readonly purpose: string;
}
