import { IsPassword } from './../../../decorators/IsPassword';
import { IsString, Validate } from 'class-validator';

export class PasswordDto {
	@IsString()
	@Validate(IsPassword)
	readonly password: string;
}
