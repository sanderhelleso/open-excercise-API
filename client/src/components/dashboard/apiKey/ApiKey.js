import React from 'react';
import styled from 'styled-components';
import ApiKeyField from './ApiKeyField';

const ApiKey = () => {
	return (
		<StyledDiv>
			<h5>My API key</h5>
			<ApiKeyField />
		</StyledDiv>
	);
};

export default ApiKey;

const StyledDiv = styled.div`
	margin-top: 2rem;

	h5 {
		font-size: 1rem;
		margin-bottom: 1.5rem;
	}
`;
