import React from 'react';

const sections = [
	{
		excercise: {
			attributes: {
				name: 'string',
				muscle: 'string'
			},
			text: (
				<p>
					Excercise contains the attributes <span>name</span> and <span>muscle</span>. Indicating what
					excercise this is and what muscle get used when performing the excercise.
				</p>
			),
			sections: [
				{
					title: 'Excercise Name',
					text: 'Get data for a specific excercise',
					method: 'GET',
					endpoint: '/excercises/name/:name',
					exampleEndpoint: 'http://localhost:4000/api/excercises/name/arnold dumbbell press'
				},
				{
					title: 'Excercise Muscle',
					text: 'Get data for all excercises used in a specific muscle',
					method: 'GET',
					endpoint: '/excercises/muscle/:muscle',
					exampleEndpoint: 'http://localhost:4000/api/excercises/muscle/chest'
				},
				{
					title: 'Search with keyword',
					text: 'Get data for all excercises similar to the search',
					method: 'GET',
					endpoint: '/excercises/search?keyword=something',
					exampleEndpoint: 'http://localhost:4000/api/excercises/search?keyword=push'
				}
			]
		}
	},
	{
		muscle: {
			attributes: {
				name: 'string',
				excercises: 'number'
			},
			text: (
				<p>
					Muscle contains the attributes <span>name</span> and <span>excercises</span>. Indicating what muscle
					this is and the amount of available excecises under this muscle group.
				</p>
			),
			sections: [
				{
					title: 'All muscles',
					text: 'Get data for all muscle categories',
					method: 'GET',
					endpoint: '/muscles',
					exampleEndpoint: 'http://localhost:4000/api/muscles'
				},
				{
					title: 'Muscle Name',
					text: 'Get data for a specific muscle category',
					method: 'GET',
					endpoint: '/muscles/name/:name',
					exampleEndpoint: 'http://localhost:4000/api/muscles/name/chest'
				}
			]
		}
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
