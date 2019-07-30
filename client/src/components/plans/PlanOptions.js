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

const renderOptions = () => {
	return options.map((option) => {
		return <PlanOption {...option} />;
	});
};

const PlanOptions = () => <StyledCont>{renderOptions()}</StyledCont>;

export default PlanOptions;

const StyledCont = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 3.5rem 0;
`;
