import React from 'react';
import LandingHeader from './LandingHeader';
import styled from 'styled-components';
import LandingPlans from './LandingPlans';

const Landing = () => {
	return (
		<StyledMain>
			<LandingHeader />
			<LandingPlans />
		</StyledMain>
	);
};

export default Landing;

const StyledMain = styled.main`
	min-width: 100%;
	min-height: 100vh;

	button {
		min-width: 200px;
		min-height: 60px;
	}
`;
