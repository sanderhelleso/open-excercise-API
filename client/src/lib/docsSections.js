const sections = [
	{
		excercises: [
			{
				title: 'By Name',
				text: 'Get data for a specific excercise',
				method: 'GET',
				endpoint: '/excercises/name/:name',
				exampleEndpoint: 'http://localhost:4000/api/excercises/name/arnold dumbbell press'
			},
			{
				title: 'By Muscle',
				text: 'Get data for all excercises used in a specific muscle',
				method: 'GET',
				endpoint: '/excercises/muscle/:muscle',
				exampleEndpoint: 'http://localhost:4000/api/excercises/muscle/chest'
			},
			{
				title: 'By Search',
				text: 'Get data for all excercises similar to the search',
				method: 'GET',
				endpoint: '/excercises/search',
				exampleEndpoint: 'http://localhost:4000/api/excercises/search?keyword=push'
			}
		]
	},
	{
		muscles: [
			{
				title: 'All muscles',
				text: 'Get data for all muscle categories',
				method: 'GET',
				endpoint: '/muscles',
				exampleEndpoint: 'http://localhost:4000/api/muscles'
			},
			{
				title: 'By Muscle Name',
				text: 'Get data for a specific muscle category',
				method: 'GET',
				endpoint: '/muscles/name/:name',
				exampleEndpoint: 'http://localhost:4000/api/muscles/name/chest'
			}
		]
	}
];

export const formatDocsLink = (str, noHash) => {
	str = str.toLowerCase().split(' ');

	if (str.length) {
		str = str.join('-');
	}

	return `${noHash ? '' : '#'}${str}`;
};

export default sections;
