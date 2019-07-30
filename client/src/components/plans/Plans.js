import React from 'react';
import styled from 'styled-components';
import PlanOptions from './PlanOptions';

const Plans = () => {
	return (
		<StyledDiv>
			<h1>Select the plan that is right for you</h1>
			<p>Pricing Guide</p>
			<PlanOptions />
		</StyledDiv>
	);
};

export default Plans;

const StyledDiv = styled.div`
	text-align: center;
	margin-top: 3rem;

	h1 {
		font-size: 2rem;
	}

	p {
		font-size: 1.1rem;
	}
`;
