import React from 'react';
import Container from '../common/Container';
import styled from 'styled-components';
import DocsNavigator from './docsNavigator/DocsNavigator';
import docsSections from '../../lib/docsSections';
import { renderDocsSections } from '../../lib/renders';
import DocsIntro from './DocsIntro';
import DocsResponses from './docsResponses/DocsResponses';
import DocsGetStarted from './docsGetStarted/DocsGetStarted';

const Docs = () => {
	return (
		<Container>
			<StyledDocs>
				<DocsNavigator />
				<DocsIntro />
				<DocsGetStarted />
				<DocsResponses />
				{renderDocsSections(docsSections)}
			</StyledDocs>
		</Container>
	);
};

export default Docs;

const StyledDocs = styled.div`
	padding-bottom: 50px;
	position: relative;

	@media screen and (max-width: 1720px) {
		max-width: 870px;
	}

	@media screen and (max-width: 1500px) {
		max-width: 770px;
	}

	@media screen and (max-width: 1400px) {
		max-width: 725px;
	}

	@media screen and (max-width: 1275px) {
		max-width: 100%;
	}

	section {
		margin-bottom: 4rem;
		padding-top: 60px;

		h2 {
			font-size: 1.75rem;
			text-transform: capitalize;
		}

		p {
			span {
				background-color: #e1f5fe;
				padding: 2px 7px;
				border-radius: 4px;
				color: #139ff2;
			}
		}
	}

	.docs-section-main {
		border-top: 1px solid #e0e0e0;
		padding-top: 2.5rem;
		margin-bottom: 3.5rem;
	}
`;
