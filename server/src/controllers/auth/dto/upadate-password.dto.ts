import { IsString } from 'class-validator';

export class UpdatePwDto {
	@IsString() readonly password: string;
}
