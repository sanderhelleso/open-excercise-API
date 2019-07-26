import { ADD_CHART_PERIOD_DATA, SET_INITIAL_CHART_DATA } from '../actions/types';

const initialState = {
	data: [],
	last_fetch: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_INITIAL_CHART_DATA: {
			return action.payload;
		}

		case ADD_CHART_PERIOD_DATA: {
			const { last_fetch, data } = action.payload;

			const extended = state.data;
			extended.shift(data);

			return {
				data: extended,
				last_fetch
			};
		}

		default:
			return state;
	}
};
