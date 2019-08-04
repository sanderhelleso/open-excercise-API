export const optionsData = [
	{
		name: 'Individual',
		id: 'individual',
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

export const getAvailavblePlanOptions = (currentPlanID) => {
	return optionsData
		.slice(1, optionsData.length)
		.filter(({ id }) => id !== currentPlanID)
		.map((o) => ({ value: optionsData.indexOf(o), label: o.name }));
};
