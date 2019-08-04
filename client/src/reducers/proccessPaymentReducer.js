import { SET_PROCCESSING_PAYMENT, SET_NOT_PROCCESING_PAYMENT } from '../actions/types';

const initialState = {
	source: null,
	ccLast4: null,
	proccesingPayment: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_PROCCESSING_PAYMENT: {
			return {
				...state,
				...action.payload,
				proccesingPayment: true
			};
		}

		case SET_NOT_PROCCESING_PAYMENT: {
			return initialState;
		}

		default:
			return state;
	}
};
