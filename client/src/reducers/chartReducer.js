import { ADD_CHART_PERIOD, SET_INITIAL_CHART_DATA, ADD_CHART_PERIOD_DATA } from '../actions/types';
import { N_PERIODS, makePeriod } from '../lib/analytics';

const initialState = {
	data: [],
	periodIndex: 0
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_INITIAL_CHART_DATA: {
			return {
				...state,
				data: action.payload
			};
		}

		case ADD_CHART_PERIOD: {
			const extended = [ ...state.data ];
			let next = state.periodIndex + 1;

			if (next === N_PERIODS) {
				const pre = extended[N_PERIODS - 1].ts;
				extended.shift();
				extended.push(makePeriod(1, pre));
				next = 0;
			}

			return {
				data: extended,
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
