const PW_MIN = 8;
const PW_MAX = 255;
const HAS_SPECIAL = new RegExp(/[^a-zA-Z\d]/);
const HAS_DIGIT = new RegExp(/\d/);
const NAME_MIN = 2;

export const isPassword = (s) => {
	if (!s) return false;

	return s.length >= PW_MIN && s.length <= PW_MAX && HAS_SPECIAL.test(s) && HAS_DIGIT.test(s);
};

export const isEmptyObj = (o) => {
	for (let k in o) if (!o[k] || !o[k].trim()) return true;

	return false;
};

export const isName = (s) => {
	if (!s) return false;

	return s.trim().length >= NAME_MIN;
};

export const shallowEqual = (o1, o2) => {
	if (!o1 || !o2) return false;

	if (Object.keys(o1).length !== Object.keys(o2).length) {
		return false;
	}

	for (let k in o1) {
		if (!o2[k] || o1[k] !== o2[k]) return false;
	}

	return true;
};
