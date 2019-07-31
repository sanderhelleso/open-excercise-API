import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const PaymentFormHeader = ({ name, subtext }) => (
	<StyledHeader>
		<h1>{name} Plan</h1>
		<StyledSelectCont>
			<StyledSum>{subtext}</StyledSum>
		</StyledSelectCont>
	</StyledHeader>
);

const mapStateToProps = ({ plans: { selectedOption } }) => {
	const { name, subtext } = selectedOption;
	return { name, subtext };
};

export default connect(mapStateToProps, null)(PaymentFormHeader);

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
	min-width: 80px;
	text-align: right;
`;

const StyledSelectCont = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	margin-left: auto;
`;
