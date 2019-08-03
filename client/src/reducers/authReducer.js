import { LOGIN } from '../actions/types';

const initialState = {
	isAuthenticated: null,
	token: null
};

export default (state = initialState, aciton) => {
	switch (aciton.type) {
		case LOGIN:
			return {
				...state,
				...aciton.payload,
				isAuthenticated: true
			};

		default:
			return state;
	}
};
