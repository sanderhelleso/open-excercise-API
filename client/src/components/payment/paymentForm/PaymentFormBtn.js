import React from 'react';
import styled from 'styled-components';
import { ArrowRight } from 'react-feather';

const PaymentFormBtn = () => {
	return (
		<StyledDiv>
			<StyledButton>
				PAY <ArrowRight />
			</StyledButton>
		</StyledDiv>
	);
};

export default PaymentFormBtn;

const StyledButton = styled.button`
	margin-left: auto;
	padding: 1rem 2.5rem;
	border: none;
	outline: none;
	text-transform: uppercase;
	letter-spacing: 1.25px;
	border-radius: 4px;
	font-weight: 400;
	transition: 0.3s ease-in-out;
	transform: scale(1.001);
	background-color: #139ff2;
	cursor: pointer;
	box-shadow: 0px 12px 30px 0px rgba(19, 159, 242, 0.5);
	font-size: 0.9rem;
	color: #ffffff;
	position: relative;
	min-width: 150px;

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
	grid-area: paymentBtn;
	margin-left: 1.2rem;
	margin-top: 1rem;
`;
