import { ADD_CHART_PERIOD, SET_INITIAL_CHART_DATA, ADD_CHART_PERIOD_DATA } from '../actions/types';
import { N_PERIODS, makePeriod } from '../lib/analytics';

const initialState = {
	data: [],
	last_fetch: null,
	periodIndex: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_INITIAL_CHART_DATA: {
			return action.payload;
		}

		case ADD_CHART_PERIOD: {
			const extended = [ ...state.data ];
			const next = N_PERIODS + 1;

			extended.shift();
			extended.push(makePeriod(next));

			return {
				data: extended,
				last_fetch: new Date().getTime(),
				periodIndex: next
			};
		}

		case ADD_CHART_PERIOD_DATA: {
			const extended = [ ...state.data ];
			extended[state.periodIndex].Requests++;

			return {
				...state,
				data: extended
			};
		}

		default:
			return state;
	}
};
