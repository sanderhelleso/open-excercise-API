import React from 'react';
import styled from 'styled-components';

import PaymentFormHeader from './PaymentFormHeader';
import PaymentFormBtn from './PaymentFormBtn';
import { CardElement, injectStripe } from 'react-stripe-elements';

const createOptions = {
	style: {
		base: {
			iconColor: '#139ff2',
			color: '#31325F',
			lineHeight: '40px',
			fontWeight: 100,
			fontSize: '16px',
			border: '1px solid red',

			'::placeholder': {
				color: '#CFD7E0'
			}
		}
	}
};

const PaymentForm = () => {
	return (
		<StyledCont>
			<PaymentFormHeader />
			<StyledDiv>
				<CardElement {...createOptions} />
				<PaymentFormBtn />
			</StyledDiv>
		</StyledCont>
	);
};

export default injectStripe(PaymentForm);

const StyledCont = styled.div`
	background-color: #fefefe;
	border: 1.25px solid #eeeeee;
	border-radius: 4px;
	box-shadow: 0px 7.5px 15px rgba(0, 0, 0, 0.045);
	padding: 1.5rem 0;
	justify-content: center;
	align-items: center;
	min-height: 270px;
	max-height: 270px;
	justify-content: center;
	align-items: center;
	margin-bottom: 4rem;
	padding: 3rem;
`;

const StyledDiv = styled.div`
	.StripeElement {
		border-radius: 4px;
		border: 1px solid #e0e0e0;
		padding: 3px 10px;
		transition: 0.3s ease-in-out;
	}

	.StripeElement--focus {
		border-color: #139ff2;
		outline: 0;
		box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, .25);
	}
`;
