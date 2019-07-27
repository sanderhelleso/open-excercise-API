import React from 'react';
import { PlayCircle } from 'react-feather';
import styled from 'styled-components';
import _fetch from '../../../lib/_fetch';

const DocsEndpointRunExample = ({ exampleEndpoint, setExampleData }) => {
	const runExample = async () => {
		try {
			const result = await _fetch(exampleEndpoint, 'GET', null, null, true);
			const data = await result.json();
			setExampleData(JSON.stringify(data, null, 4));
		} catch (error) {
			alert(error);
		}
	};

	return (
		<StyledBtn title="Try it out" onClick={runExample}>
			<PlayCircle />
		</StyledBtn>
	);
};

export default DocsEndpointRunExample;

const StyledBtn = styled.button`
	background-color: transparent;
	margin-left: auto;
	margin-right: 0.5rem;
	outline: none;
	border: none;

	svg {
		stroke: #139ff2;
		margin-top: 3px;
		cursor: pointer;
		transition: 0.3s ease;
		opacity: 0.6;

		&:hover {
			opacity: 1;
		}
	}
`;
