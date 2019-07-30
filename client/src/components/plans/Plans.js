import React from 'react';
import styled from 'styled-components';
import PlanOption from './PlanOption';

const options = [
	{
		name: 'Individual',
		subtext: 'FREE',
		features: [ 'Free forver', 'For individuals', 'Up to 10k requests' ]
	},
	{
		name: 'Small Business',
		subtext: '$50/mo',
		features: [ 'For medium sized apps', 'Up to 150k requests', 'Email support' ],
		withShadow: true
	},
	{
		name: 'Enterprise',
		subtext: '$150/mo',
		features: [ 'For larger apps', 'Up to 750k requests', 'Dedicated account support' ]
	}
];

const Plans = () => {
	const renderOptions = () => {
		return options.map((option) => {
			return <PlanOption {...option} />;
		});
	};

	return (
		<StyledDiv>
			<h1>Select the plan that is right for you</h1>
			<p>Pricing Guide</p>
			<StyledCont>{renderOptions()}</StyledCont>
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

const StyledCont = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 3.5rem 0;
`;
