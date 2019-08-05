const MIN = 8;
const MAX = 255;
const HAS_SPECIAL = new RegExp(/[^a-zA-Z\d]/);
const HAS_DIGIT = new RegExp(/\d/);

export const isPassword = (s) => {
	if (!s) return false;

	return s.length >= MIN && s.length <= MAX && HAS_SPECIAL.test(s) && HAS_DIGIT.test(s);
};
