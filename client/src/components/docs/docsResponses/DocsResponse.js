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
	margin-bottom: 0.75rem;
	display: flex;
	flex-direction: row;
	align-items: center;

	span {
		margin-right: 0.5rem;
		border-radius: 6px;
		min-width: 50px;
		padding: 5px;
		background-color: ${({ success }) => (success ? '#c8e6c9' : '#ffcdd2')};
		border: 1px solid ${({ success }) => (success ? '#a5d6a7' : '#ef9a9a')};
		text-align: center;
		color: #000;
	}

	h5 {
		margin: 0;
	}
`;
