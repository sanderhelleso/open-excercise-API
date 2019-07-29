import React from 'react';
import styled from 'styled-components';

const PaymentFormBtn = () => {
	return (
		<StyledDiv>
			<StyledButton>PAY</StyledButton>
		</StyledDiv>
	);
};

export default PaymentFormBtn;

const StyledButton = styled.button`margin-left: auto;`;

const StyledDiv = styled.div`
	min-width: 100%;
	display: flex;
	grid-area: paymentBtn;
	margin-left: 1rem;
`;
