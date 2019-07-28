import React from 'react';
import styled from 'styled-components';
import DocsEndpointExample from '../docsEndpoint/DocsEndpointExample';

const exampleHeader = JSON.stringify(
	{
		Authtorization: 'Bearer <api-key>'
	},
	null,
	4
);

const DocsGetStarted = () => (
	<section className="docs-section-main">
		<h2>Get Started</h2>
		<StyledP>
			In order to use our API you need a valid API key. The API key must be present in the{' '}
			<span>Authorization</span> header, prefixed witih either <span>Bearer</span> or <span>ApiKey</span>.
		</StyledP>
		<DocsEndpointExample exampleData={exampleHeader} customText="Example request header" />
	</section>
);

export default DocsGetStarted;

const StyledP = styled.p`margin-bottom: 2rem;`;
