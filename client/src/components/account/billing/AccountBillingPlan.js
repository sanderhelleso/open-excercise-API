import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ButtonV2 from '../../common/ButtonV2';
import { withRouter } from 'react-router-dom';

const buttons = [
	{
		text: 'cancel',
		flat: true
	},
	{
		text: 'change'
	}
];

const AccountBillingPlan = ({ name, price, hasSub, history }) => {
	const onClicks = [ null, () => history.push('/plans') ];

	const renderButtons = () => {
		if (!hasSub) buttons.shift();

		return buttons.map((button, i) => {
			return <ButtonV2 key={i} {...button} onClick={onClicks[i]} />;
		});
	};

	return (
		<StyledCont>
			<StyledDiv>
				<img src={`${process.env.PUBLIC_URL}/img/${name.split(' ').join('_')}_plan.svg`} />
				<div>
					<h5>{name}</h5>
					<p>{!hasSub ? 'FREE' : `$${price}/mo`}</p>
				</div>
			</StyledDiv>
			<StyledDiv class="btns">{renderButtons()}</StyledDiv>
		</StyledCont>
	);
};

const mapStateToProps = ({ subscription, plans }) => {
	const { planID } = subscription;
	const { optionsData } = plans;
	const { name, price } = optionsData.find(({ id }) => id === planID);

	return { name, price, hasSub: planID !== 'individual' };
};

export default connect(mapStateToProps, null)(withRouter(AccountBillingPlan));

const StyledCont = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	button:first-child {
		margin-left: auto;
	}

	button {
		margin-left: 2rem;
	}
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
