import React from 'react';
import styled from 'styled-components';
import ApiKeyUpdateBtn from './ApiKeyUpdateBtn';
import ApiKeySeeBtn from './ApiKeySeeBtn';

const ApiKeyBtns = () => (
	<StyledBtnCont>
		<ApiKeySeeBtn />
		<ApiKeyUpdateBtn />
	</StyledBtnCont>
);

export default ApiKeyBtns;

const StyledBtnCont = styled.div`
	display: flex;
	flex-direction: row;

	button {
		margin-right: 1rem;
	}
`;
