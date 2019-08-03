import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const PaymentFormHeader = ({ name, price }) => (
	<StyledHeader>
		<h1>{name} Plan</h1>
		<StyledSelectCont>
			<StyledSum>${price}/mo</StyledSum>
		</StyledSelectCont>
	</StyledHeader>
);

const mapStateToProps = ({ plans: { selectedOption } }) => {
	const { name, price } = selectedOption;
	return { name, price };
};

export default connect(mapStateToProps, null)(PaymentFormHeader);

const StyledHeader = styled.div`
	margin-bottom: 3rem;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #eeeeee;
	padding-bottom: 1rem;

	h1 {
		margin-left: 0.5rem;
		color: #9e9e9e;
		opacity: 0.8;
		font-weight: 100;
	}
`;

const StyledSum = styled.div`
	font-size: 2rem;
	position: relative;
	margin-right: 1rem;
	min-width: 80px;
	text-align: right;
`;

const StyledSelectCont = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	margin-left: auto;
`;
