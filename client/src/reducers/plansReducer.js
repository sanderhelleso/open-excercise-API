import { SET_SELECTED_PLAN } from '../actions/types';

const optionsData = [
	{
		name: 'Individual',
		subtext: 'FREE',
		features: [ 'Free forver', 'For individuals', 'Up to 10k requests' ],
		price: 0
	},
	{
		name: 'Small Business',
		subtext: '$50/mo',
		features: [ 'For medium sized apps', 'Up to 150k requests', 'Email support' ],
		price: 50,
		withShadow: true
	},
	{
		name: 'Enterprise',
		subtext: '$150/mo',
		price: 150,
		features: [ 'For larger apps', 'Up to 750k requests', 'Dedicated account support' ]
	}
];

const options = optionsData.slice(1, optionsData.length).map(({ name }, i) => ({ value: i, label: name }));

const initialState = {
	selectedOption: optionsData[1],
	selectedOptionIndex: 0,
	optionsData,
	options
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_SELECTED_PLAN: {
			const selectedOptionIndex = action.payload;

			return {
				...state,
				selectedOption: optionsData[selectedOptionIndex + 1],
				selectedOptionIndex
			};
		}

		default:
			return state;
	}
};
