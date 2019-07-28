import React from 'react';
import Container from '../common/Container';
import styled from 'styled-components';
import DocsNavigator from './docsNavigator/DocsNavigator';
import docsSections from '../../lib/docsSections';
import { renderDocsSections } from '../../lib/renders';
import DocsIntro from './DocsIntro';

const Docs = () => {
	return (
		<Container>
			<DocsNavigator />
			<StyledDocs>
				<DocsIntro />
				{renderDocsSections(docsSections)}
			</StyledDocs>
		</Container>
	);
};

export default Docs;

const StyledDocs = styled.div`
	section {
		margin-bottom: 4rem;

		h2 {
			font-size: 1.75rem;
			text-transform: capitalize;
		}

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

	}
	}
`;
