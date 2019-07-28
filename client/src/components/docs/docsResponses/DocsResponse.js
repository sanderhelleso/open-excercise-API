import React from 'react';
import styled from 'styled-components';

const DocsResponse = ({ code, desc, success }) => (
	<StyledDiv success={success}>
		<span>{code}</span>
		<p>{desc}</p>
	</StyledDiv>
);

export default DocsResponse;

const StyledDiv = styled.div`
	margin-bottom: 1rem;
	display: flex;
	flex-direction: row;
	align-items: center;

	span {
		margin-right: 0.5rem;
		border-radius: 3px;
		min-width: 40px;
		padding: 5px;
		background-color: ${({ success }) => (success ? '#69f0ae' : '#ff1744')};
		text-align: center;
		color: ${({ success }) => (success ? '#000' : '#ffebee')};
		font-size: 0.9rem;
	}

	h5 {
		margin: 0;
	}
`;
