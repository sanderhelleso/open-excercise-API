import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

const MIN = 8;
const MAX = 255;
const HAS_SPECIAL = new RegExp(/[^a-zA-Z\d]/);
const HAS_DIGIT = new RegExp(/\d/);

@ValidatorConstraint({ name: 'IsPassword', async: false })
export class IsPassword implements ValidatorConstraintInterface {
	validate(s: string, args: ValidationArguments) {
		if (!s) return false;

		return s.length >= MIN && s.length <= MAX && HAS_SPECIAL.test(s) && HAS_DIGIT.test(s);
	}

	defaultMessage(args: ValidationArguments) {
		return `Password must be between ${MIN} and ${MAX} characters, contain atleast 1 digit, and contain atleast 1 special character`;
	}
}
