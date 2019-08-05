import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowRight } from 'react-feather';
import { connect } from 'react-redux';
import Loader from '../../common/Loader';
import _fetch from '../../../lib/_fetch';
import setProccesingPaymentAction from '../../../actions/setProccessingPaymentAction';

const PaymentFormBtn = ({ createToken, complete, setProccesingPaymentAction }) => {
	const [ loading, setLoading ] = useState(false);

	const handleSubmit = async () => {
		if (!complete) return;

		setLoading(true);

		const { token: { card, id } } = await createToken();

		setProccesingPaymentAction({
			source: id,
			ccLast4: card.last4
		});
	};

	const renderInner = () => {
		if (loading) return <Loader size={20} color="#ffffff" />;

		return (
			<span>
				PAY <ArrowRight />
			</span>
		);
	};

	return (
		<StyledDiv>
			<img src={`${process.env.PUBLIC_URL}/img/powered_by_stripe.png`} />
			<StyledButton onClick={handleSubmit} complete={complete} loading={loading}>
				{renderInner()}
			</StyledButton>
		</StyledDiv>
	);
};

const actions = {
	setProccesingPaymentAction
};

export default connect(null, actions)(PaymentFormBtn);

const StyledButton = styled.button`
	padding: 1rem 2.5rem;
	border: none;
	outline: none;
	text-transform: uppercase;
	letter-spacing: 1.25px;
	border-radius: 4px;
	font-weight: 400;
	transition: 0.3s ease-in-out;
	transform: scale(1.001);
	font-size: 0.9rem;
	position: relative;
	min-width: 150px;
	min-height: 58px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 1.4rem;

	cursor: ${({ loading }) => (loading ? 'none' : 'default')};
	cursor: ${({ complete }) => (complete ? 'pointer' : 'not-allowed')};
	color: ${({ complete }) => (complete ? '#ffffff' : '#9e9e9e')};
	box-shadow: ${({ complete }) => (complete ? ' 0px 12px 30px 0px rgba(19, 159, 242, 0.5)' : 'none')};
	background-color: ${({ complete }) => (complete ? '#139ff2' : '#e0e0e0')};

	svg {
		position: absolute;
		top: 1.2rem;
		right: 1rem;
		height: 1.2rem;
		width: 1.2rem;
		opacity: 0.7;
	}
`;

const StyledDiv = styled.div`
	min-width: 100%;
	display: flex;
	align-items: center;
	grid-area: paymentBtn;
	margin-left: 1.2rem;
	margin-top: 3rem;

	img {
		margin-left: auto;
		margin-right: 3rem;
		width: 119px;
		height: 26px;
	}
`;
