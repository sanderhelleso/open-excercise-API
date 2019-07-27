const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue gravida sem sit amet
scelerisque. Nunc tincidunt nibh quis quam tristique, sit amet porttitor magna pellentesque. Sed eu
massa a sapien vestibulum sollicitudin. Quisque luctus magna nec faucibus scelerisque. Sed bibendum
iaculis cursus. Nam eu quam justo. Maecenas augue augue, eleifend vel placerat sit amet, aliquam ut
ex. Etiam eleifend suscipit enim id ultricies. Nunc consequat tincidunt massa, eget cursus arcu
ultrices nec. Fusce ut interdum lacus. Proin commodo consequat odio, eu varius erat dignissim vitae.
Donec vestibulum nibh eu pulvinar laoreet. Fusce gravida id elit eget lacinia. Aenean rutrum orci ac
faucibus blandit. Sed sit amet urna non nisl fringilla consequat. Cras magna felis, placerat vel
tincidunt sed, ullamcorper ac eros.`;

const sections = [
	{
		excercises: [
			{
				title: 'By Name',
				text,
				method: 'GET',
				endpoint: '/excercises/name/:name'
			},
			{
				title: 'By Muscle',
				text,
				method: 'GET',
				endpoint: '/excercises/muscle/:muscle'
			},
			{
				title: 'By Search',
				text,
				method: 'GET',
				endpoint: '/excercises/search'
			}
		]
	},
	{
		muscles: [
			{
				title: 'All muscles',
				text,
				method: 'GET',
				endpoint: '/muscles'
			},
			{
				title: 'By Muscle Name',
				text,
				method: 'GET',
				endpoint: '/muscles/name/:name'
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
