import React from 'react';
import styled from 'styled-components';

const PlanOption = ({ name, subtext, features, withShadow }) => {
	const renderFeatures = () => {
		return features.map((feature, i) => {
			return <StyledSpan withBorder={i !== features.length - 1}>{feature}</StyledSpan>;
		});
	};

	return (
		<StyledDiv withShadow={withShadow}>
			<h3>{name}</h3>
			<h5>{subtext}</h5>
			<StyledFeatures>{renderFeatures()}</StyledFeatures>
		</StyledDiv>
	);
};

export default PlanOption;

const StyledDiv = styled.div`
	min-width: 250px;
	min-height: 350px;
	max-height: 350px;
	margin: 0 1rem;
	padding: 2rem 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border-radius: 4px;
	box-shadow: ${({ withShadow }) => (withShadow ? '0px 10px 20px rgba(0, 0, 0, 0.085)' : 'none')};
	background-color: ${({ withShadow }) => (withShadow ? '#ffffff' : 'transparent')};

	h3 {
		font-size: 1.15rem;
		margin-bottom: 1.25rem;
	}

	h5 {
		color: #139ff2;
		font-size: 1.85rem;
		font-weight: 100;
	}
`;

const StyledFeatures = styled.div`margin-top: 1rem;`;

const StyledSpan = styled.span`
	display: block;
	padding: 1rem 0;
	min-width: 175px;
	max-width: 175px;
	border-bottom: ${({ withBorder }) => (withBorder ? '1px solid #e0e0e0' : 'none')};
	font-size: 0.9rem;
	color: #444444;
	font-weight: 100;
	opacity: 0.7;
`;
