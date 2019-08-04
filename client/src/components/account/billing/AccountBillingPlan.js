import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const AccountBillingPlan = ({ name, price }) => {
	return (
		<StyledCont>
			<StyledDiv>
				<img src={`${process.env.PUBLIC_URL}/img/${name.split(' ').join('_')}_plan.svg`} />
				<div>
					<h5>{name}</h5>
					<p>${price}/mo</p>
				</div>
			</StyledDiv>
			<button>cancel</button>
		</StyledCont>
	);
};

const mapStateToProps = ({ subscription, plans }) => {
	const { planID } = subscription;
	const { optionsData } = plans;
	const { name, price } = optionsData.find(({ id }) => id === planID);

	return { name, price };
};

export default connect(mapStateToProps, null)(AccountBillingPlan);

const StyledCont = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const StyledDiv = styled.div`
	display: flex;
	flex-direction: row;
	min-width: 400px;

	div {
		margin-left: 0.5rem;

		h5 {
			margin-top: 0.5rem;
			font-size: 1.2rem;
			margin-bottom: 2.5px;
		}
	}

	img {
		max-width: 75px;
		max-height: 75px;
	}
`;
