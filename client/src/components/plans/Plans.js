import React from 'react';
import styled from 'styled-components';
import PlanOptions from './PlanOptions';
import PlansSelect from './PlansSelect';

const Plans = () => {
	return (
		<StyledDiv>
			<h1>Select the plan that is right for you</h1>
			<PlansSelect />
			<PlanOptions />
		</StyledDiv>
	);
};

export default Plans;

const StyledDiv = styled.div`
	text-align: center;
	margin: 3rem 0;

	h1 {
		font-size: 2rem;
	}

	p {
		font-size: 1.1rem;
	}
`;
