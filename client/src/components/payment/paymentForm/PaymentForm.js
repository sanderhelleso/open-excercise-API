import React, { useState } from 'react';
import styled from 'styled-components';
import PaymentCard from './PaymentFormCard';

const fields = [
	{
		name: 'card number',
		type: 'number',
		gridArea: 'cardNumber'
	},
	{
		name: 'name',
		type: 'text',
		gridArea: 'cardName'
	},
	{
		name: 'valid thru',
		type: 'number',
		gridArea: 'cardValid'
	},
	{
		name: 'CVC',
		type: 'number',
		gridArea: 'cardCVC'
	}
];

const PaymentForm = () => {
	const renderFields = () => {
		return fields.map((field) => {
			return (
				<StyledInputCont gridArea={field.gridArea}>
					<input {...field} placeholder={field.name} />
				</StyledInputCont>
			);
		});
	};

	return (
		<StyledCont>
			<StyledHeader>
				<h1>Pay</h1>
				<StyledSum>$ 600</StyledSum>
			</StyledHeader>
			<StyledDiv>
				<PaymentCard />
				<StyledGrid>{renderFields()}</StyledGrid>
			</StyledDiv>
		</StyledCont>
	);
};

export default PaymentForm;

const StyledCont = styled.div`
	background-color: #fefefe;
	border: 1.25px solid #eeeeee;
	border-radius: 4px;
	box-shadow: 0px 7.5px 15px rgba(0, 0, 0, 0.045);
	padding: 1.5rem 0;
	justify-content: center;
	align-items: center;
	max-height: 375px;
	justify-content: center;
	align-items: center;
`;

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

const StyledDiv = styled.div`
	display: flex;
	flex-direction: row;
	padding-top: 1rem;
`;

const StyledInputCont = styled.div`grid-area: ${({ gridArea }) => gridArea};`;

const StyledGrid = styled.div`
	display: grid;
	grid-template: 'cardNumber cardNumber' 'cardName cardName' 'cardValid cardCVC';
	grid-column-gap: 2rem;
	grid-row-gap: 1rem;
	max-height: 150px;
	margin-right: 6rem;
	margin-top: 0.7rem;

	input {
		min-width: 100%;
		border-radius: 4px;
		transition: 0.3s ease-in-out;
		outline: none;
		border: 1px solid #e0e0e0;
		padding: 5px 10px;
		min-height: 30px;
		font-size: 1rem;

		&::placeholder {
			opacity: 0.7;
			text-transform: capitalize;
		}

		&:focus,
		&:active {
			border: 1px solid #139ff2;
			box-shadow: 0 0 0 2px #e1f5fe;
		}
	}
`;
