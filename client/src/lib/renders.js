import React, { Fragment } from 'react';
import DocsHeading from '../components/docs/DocsHeading';
import { formatDocsLink } from './docsSections';
import DocsEndpoint from '../components/docs/docsEndpoint/DocsEndpoint';

export const renderDocsSections = (sections) => {
	return sections.map((section) => {
		return Object.entries(section).map(([ k, v ], i) => {
			return (
				<Fragment key={`docs-section-cont-${i}`}>
					<section>
						<h2>{k}</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue gravida sem sit amet
							scelerisque. Nunc tincidunt nibh quis quam tristique, sit amet porttitor magna pellentesque.
							Sed eu massa a sapien vestibulum sollicitudin.{' '}
						</p>
					</section>
					{v.map(({ title, text, method, endpoint }, j) => (
						<section key={`docs-section-${j}`} id={formatDocsLink(title, true)} className="docs-section">
							<DocsHeading title={title} />
							<DocsEndpoint method={method} endpoint={endpoint} />
							<p>{text}</p>
						</section>
					))}
				</Fragment>
			);
		});
	});
};
