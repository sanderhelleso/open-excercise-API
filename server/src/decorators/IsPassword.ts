import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

const MIN = 8;
const MAX = 255;
const HAS_SPECIAL = new RegExp(/[^a-zA-Z\d]/);
const HAS_DIGIT = new RegExp(/\d/);

@ValidatorConstraint({ name: 'IsPassword', async: false })
export class IsPassword implements ValidatorConstraintInterface {
	validate(password: string, args: ValidationArguments) {
		return (
			password.length >= MIN && password.length <= MAX && HAS_SPECIAL.test(password) && HAS_DIGIT.test(password)
		);
	}

	defaultMessage(args: ValidationArguments) {
		return `Password must be between ${MIN} and ${MAX} characters, and must contain atleast 1 digit and 1 special character`;
	}
}
