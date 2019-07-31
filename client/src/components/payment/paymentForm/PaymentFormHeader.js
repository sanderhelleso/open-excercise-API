import React from 'react';
import styled from 'styled-components';
import PaymentFormSelectPlan from './PaymentFormSelectPlan';

const PaymentFormHeader = () => (
	<StyledHeader>
		<h1>Pay</h1>
		<StyledSelectCont>
			<PaymentFormSelectPlan />
			<StyledSum>$ 600</StyledSum>
		</StyledSelectCont>
	</StyledHeader>
);

export default PaymentFormHeader;

const StyledHeader = styled.div`
	margin: 1rem 3.5rem;
	margin-bottom: 2rem;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #eeeeee;
	padding-bottom: 1rem;
	margin-bottom: 2rem;

	h1 {
		margin-left: 0.5rem;
	}
`;

const StyledSum = styled.div`
	font-size: 2rem;
	position: relative;
	margin-right: 1rem;
`;

const StyledSelectCont = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	margin-left: auto;
`;
