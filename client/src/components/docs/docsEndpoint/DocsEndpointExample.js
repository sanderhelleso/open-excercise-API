import React from 'react';
import styled from 'styled-components';

const DocsEndpointExample = ({ exampleData }) => <StyledPre>{exampleData}</StyledPre>;

export default DocsEndpointExample;

const StyledPre = styled.pre`
	background-color: #1d1d1d;
	word-break: break-all;
	color: #ffffff;
	padding: 2rem;
	border-radius: 6px;
	box-shadow: 0px 7.5px 15px rgba(0, 0, 0, 0.15);
	max-height: 300px;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 0em;
	}
`;
