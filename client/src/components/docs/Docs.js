import React from 'react';
import Container from '../common/Container';
import styled from 'styled-components';
import DocsNavigator from './docsNavigator/DocsNavigator';
import docsSections from '../../lib/docsSections';
import { renderDocsSections } from '../../lib/renders';

const Docs = () => (
	<Container>
		<DocsNavigator />
		<StyledDocs>{renderDocsSections(docsSections)}</StyledDocs>
	</Container>
);

export default Docs;

const StyledDocs = styled.div`
	section {
		margin: 2rem 0;
		max-width: 725px;

		h2 {
			font-size: 1.75rem;
			text-transform: capitalize;
		}
	}
`;
