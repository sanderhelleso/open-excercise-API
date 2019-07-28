import React, { Fragment } from 'react';
import DocsHeading from '../components/docs/DocsHeading';
import { formatDocsLink } from './docsSections';
import DocsEndpoint from '../components/docs/docsEndpoint/DocsEndpoint';
import DocsEntity from '../components/docs/DocsEntity';

export const renderDocsSections = (sections) => {
	return sections.map((section) => {
		return Object.entries(section).map(([ k, v ], i) => {
			return (
				<Fragment key={`docs-section-cont-${i}`}>
					<section className="docs-section-main">
						<h2>{k}</h2>
						<p>{v.text}</p>
						<DocsEntity attributes={v.attributes} />
					</section>
					{v.sections.map(({ title, text, method, endpoint, exampleEndpoint }, j) => (
						<section key={`docs-section-${j}`} id={formatDocsLink(title, true)} className="docs-section">
							<DocsHeading title={title} />
							<p>{text}</p>
							<DocsEndpoint method={method} endpoint={endpoint} exampleEndpoint={exampleEndpoint} />
						</section>
					))}
				</Fragment>
			);
		});
	});
};
