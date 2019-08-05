import { LOGIN, UPDATE_USER_DATA } from '../actions/types';

const initialState = {
	name: null,
	email: null,
	token: null,
	isAuthenticated: null
};

export default (state = initialState, aciton) => {
	switch (aciton.type) {
		case LOGIN:
			return {
				...state,
				...aciton.payload,
				isAuthenticated: true
			};

		case UPDATE_USER_DATA:
			return {
				...state,
				...aciton.payload
			};

		default:
			return state;
	}
};
