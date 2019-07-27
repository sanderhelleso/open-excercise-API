import React from 'react';
import styled from 'styled-components';
import DocksEndpointMethod from './DocsEndpointMethod';
import { Play, PlayCircle } from 'react-feather';
import DocsEndpointRunExample from './DocsEndpointRunExample';

const ENDPOINT_PREFIX = 'http://localhost:4000/api';

const DocsEndpoint = ({ method, endpoint, exampleEndpoint }) => {
	return (
		<StyledDiv>
			<DocksEndpointMethod method={method} />
			<h5>
				{ENDPOINT_PREFIX}
				{endpoint}
			</h5>
			<DocsEndpointRunExample exampleEndpoint={exampleEndpoint} />
		</StyledDiv>
	);
};

export default DocsEndpoint;

const StyledDiv = styled.div`
	padding: 0.5rem;
	border-radius: 6px;
	background-color: #e1f5fe;
	border: 1px solid #b3e5fc;
	margin: 1.5rem 0;
	display: flex;
	flex-direction: row;
	align-items: center;

	h5 {
		margin-bottom: 0;
		font-size: 0.9rem;
		color: #37474f;
		font-weight: 400;
	}
`;
