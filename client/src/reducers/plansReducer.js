import { SET_SELECTED_PLAN } from '../actions/types';

const optionsData = [
	{
		name: 'Individual',
		features: [ 'For individuals', 'Up to 10k requests', 'Free forver' ],
		price: 0
	},
	{
		name: 'Small Business',
		id: 'small_business',
		features: [ 'For medium sized apps', 'Up to 150k requests', 'Email support' ],
		price: 50,
		withShadow: true
	},
	{
		name: 'Enterprise',
		id: 'enterprise',
		price: 150,
		features: [ 'For larger apps', 'Up to 750k requests', 'Dedicated support' ]
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
