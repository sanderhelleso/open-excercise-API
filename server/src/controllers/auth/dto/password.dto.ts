import { IsPassword } from './../../../validators/IsPassword';
import { Validate, IsString } from 'class-validator';

export class PasswordDto {
	@Validate(IsPassword) readonly password: string;
}

export class ResetPasswordDto {
	@Validate(IsString) readonly code: string;
	@Validate(IsPassword) readonly password: string;
}
