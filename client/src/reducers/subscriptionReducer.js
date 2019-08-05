import { SET_SUB_DATA } from '../actions/types';

const initialState = {
	hasSub: false,
	planID: 'individual',
	ccLast4: null,
	nextPayment: null,
	records: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_SUB_DATA: {
			return {
				...state,
				...action.payload
			};
		}

		default:
			return state;
	}
};
