import React from 'react';
import DocsHeading from '../components/docs/DocsHeading';

export const renderDocsSections = (sections) => {
	return sections.map(({ title, text, active }) => {
		return (
			<section>
				<DocsHeading title={title} active={active} />
				<p>{text}</p>
			</section>
		);
	});
};
