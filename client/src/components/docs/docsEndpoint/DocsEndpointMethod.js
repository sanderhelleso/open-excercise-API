import React from 'react';
import styled from 'styled-components';

const DocsEndpointMethod = ({ method }) => <StyledMethod>{method}</StyledMethod>;

export default DocsEndpointMethod;

const StyledMethod = styled.div`
	padding: 6px;
	color: #e1f5fe;
	background-color: #139ff2;
	border-radius: 4px;
	min-width: 60px;
	margin-right: 1rem;
	text-align: center;
	letter-spacing: 2px;
`;
