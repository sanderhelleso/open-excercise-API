import React from 'react';
import { renderDocsSections } from '../../lib/renders';

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
		title: 'By Name',
		text,
		active: true
	},
	{
		title: 'By Muscle',
		text
	},
	{
		title: 'By Search',
		text
	}
];

const Excercises = () => {
	return (
		<div>
			<section>
				<h2>Excercises</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue gravida sem sit amet
					scelerisque. Nunc tincidunt nibh quis quam tristique, sit amet porttitor magna pellentesque. Sed eu
					massa a sapien vestibulum sollicitudin. Quisque luctus magna nec faucibus scelerisque. Sed bibendum
					iaculis cursus. Nam eu quam justo. Maecenas augue augue, eleifend vel placerat sit amet, aliquam ut
					ex. Etiam eleifend suscipit enim id ultricies. Nunc consequat tincidunt massa, eget cursus arcu
					ultrices nec. Fusce ut interdum lacus. Proin commodo consequat odio, eu varius erat dignissim vitae.
					Donec vestibulum nibh eu pulvinar laoreet. Fusce gravida id elit eget lacinia. Aenean rutrum orci ac
					faucibus blandit. Sed sit amet urna non nisl fringilla consequat. Cras magna felis, placerat vel
					tincidunt sed, ullamcorper ac eros.
				</p>
			</section>
			{renderDocsSections(sections)}
		</div>
	);
};

export default Excercises;
