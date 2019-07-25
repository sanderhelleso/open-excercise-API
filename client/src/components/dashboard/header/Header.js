import React from 'react';
import styled from 'styled-components';
import ApiKey from '../apiKey/ApiKey';

const Header = () => {
	return (
		<StyledDiv>
			<ApiKey />
		</StyledDiv>
	);
};

export default Header;

const StyledDiv = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
`;
