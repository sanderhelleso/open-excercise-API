import { SET_SELECTED_PLAN } from '../actions/types';
import { optionsData } from '../lib/planOptions';

const initialState = {
	optionsData,
	selectedOption: optionsData[1],
	selectedOptionIndex: 1
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_SELECTED_PLAN: {
			const selectedOptionIndex = action.payload;

			return {
				...state,
				selectedOption: optionsData[selectedOptionIndex],
				selectedOptionIndex
			};
		}

		default:
			return state;
	}
};
