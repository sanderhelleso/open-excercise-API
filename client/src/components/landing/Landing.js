import React from 'react';
import LandingHeader from './LandingHeader';
import styled from 'styled-components';

const Landing = () => {
	return (
		<StyledMain>
			<LandingHeader />
		</StyledMain>
	);
};

export default Landing;

const StyledMain = styled.main`
	min-width: 100%;
	min-height: 100vh;
`;
