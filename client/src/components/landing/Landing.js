import React from 'react';
import LandingHeader from './LandingHeader';
import styled from 'styled-components';
import LandingPlans from './LandingPlans';
import Footer from '../footer/Footer';

const Landing = () => {
	return (
		<StyledMain>
			<LandingHeader />
			<LandingPlans />
			<Footer />
		</StyledMain>
	);
};

export default Landing;

const StyledMain = styled.main`
	min-width: 100%;
	min-height: 100vh;
	padding-top: 50px;

	button {
		min-width: 200px;
		min-height: 60px;
	}
`;
