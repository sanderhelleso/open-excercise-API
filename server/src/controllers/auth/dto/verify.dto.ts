import { IsString } from 'class-validator';

export class VerifyAccDto {
	@IsString() readonly code: string;
}
