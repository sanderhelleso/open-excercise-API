import { SET_SELECTED_PLAN } from '../actions/types';

const options = [
	{
		name: 'Individual',
		subtext: 'FREE',
		features: [ 'Free forver', 'For individuals', 'Up to 10k requests' ]
	},
	{
		name: 'Small Business',
		subtext: '$50/mo',
		features: [ 'For medium sized apps', 'Up to 150k requests', 'Email support' ],
		withShadow: true
	},
	{
		name: 'Enterprise',
		subtext: '$150/mo',
		features: [ 'For larger apps', 'Up to 750k requests', 'Dedicated account support' ]
	}
];

const initialState = {
	selectedOption: options[1],
	selectedOptionIndex: 1,
	options
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_SELECTED_PLAN: {
			const selectedOptionIndex = action.payload;

			return {
				...state,
				selectedOption: options[selectedOptionIndex],
				selectedOptionIndex
			};
		}

		default:
			return state;
	}
};
