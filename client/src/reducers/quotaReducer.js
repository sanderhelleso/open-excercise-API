import { SET_QUOTA, SET_API_KEY } from '../actions/types';

const initialState = {
	api_key: null,
	requests_limit: null,
	requests_remaining: null,
	refilled_at: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_QUOTA: {
			return {
				...state,
				...action.payload
			};
		}

		case SET_API_KEY: {
			return {
				...state,
				api_key: action.payload
			};
		}

		default:
			return state;
	}
};
