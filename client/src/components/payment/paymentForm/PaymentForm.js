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
		<StyledDiv>
			<PaymentCard />
			<StyledGrid>{renderFields()}</StyledGrid>
		</StyledDiv>
	);
};

export default PaymentForm;

const StyledDiv = styled.div`
	display: flex;
	flex-direction: row;
`;

const StyledInputCont = styled.div`grid-area: ${({ gridArea }) => gridArea};`;

const StyledGrid = styled.div`
	display: grid;
	grid-template: 'cardNumber cardNumber' 'cardName cardName' 'cardValid cardCVC';
	grid-column-gap: 2rem;
	grid-row-gap: 1rem;
	max-height: 150px;
	margin-right: auto;
	margin-top: 1rem;

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
