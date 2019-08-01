import React from 'react';
import styled from 'styled-components';
import { ArrowRight } from 'react-feather';

const PaymentFormBtn = ({ createToken, complete }) => {
	const handleSubmit = async () => {
		console.log(complete);
		if (!complete) return;

		const { token } = await createToken();
		console.log(token);
	};

	return (
		<StyledDiv>
			<img src={`${process.env.PUBLIC_URL}/img/powered_by_stripe.png`} />
			<StyledButton onClick={handleSubmit} complete={complete}>
				PAY <ArrowRight />
			</StyledButton>
		</StyledDiv>
	);
};

export default PaymentFormBtn;

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
	margin-right: 1.4rem;

	cursor: ${({ complete }) => (complete ? 'pointer' : 'not-allowed')};
	color: ${({ complete }) => (complete ? '#ffffff' : '#9e9e9e')};
	box-shadow: ${({ complete }) => (complete ? ' 0px 12px 30px 0px rgba(19, 159, 242, 0.5)' : 'none')};
	background-color: ${({ complete }) => (complete ? '#139ff2' : '#e0e0e0')};

	svg {
		position: absolute;
		top: 1rem;
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
