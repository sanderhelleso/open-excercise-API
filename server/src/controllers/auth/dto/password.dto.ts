import { IsPassword } from './../../../validators/IsPassword';
import { Validate } from 'class-validator';

export class PasswordDto {
	@Validate(IsPassword) readonly password: string;
}
