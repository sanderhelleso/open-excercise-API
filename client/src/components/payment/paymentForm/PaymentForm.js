import React, { useReducer } from 'react';
import styled from 'styled-components';
import PaymentCard from './PaymentFormCard';

import { formatCreditCardNumber, formatCVC, formatExpirationDate, formatFormData } from '../../../lib/creditCard';

const fields = [
	{
		label: 'card number',
		name: 'number',
		type: 'number',
		gridArea: 'cardNumber'
	},
	{
		label: 'name',
		name: 'name',
		type: 'text',
		gridArea: 'cardName'
	},
	{
		label: 'valid thru',
		name: 'expiry',
		type: 'number',
		gridArea: 'cardValid'
	},
	{
		label: 'CVC',
		name: 'cvc',
		type: 'number',
		gridArea: 'cardCVC'
	}
];

const PaymentForm = () => {
	const [ state, updateState ] = useReducer((state, newState) => ({ ...state, ...newState }), {
		number: '',
		name: '',
		expiry: '',
		cvc: '',
		focused: ''
	});

	const handleFocus = ({ target: { name } }) => {
		updateState({ focused: name });
	};

	const handleChange = ({ target: { name, value } }) => {
		if (name === 'number') {
			value = formatCreditCardNumber(value);
		} else if (name === 'expiry') {
			value = formatExpirationDate(value);
		} else if (name === 'cvc') {
			value = formatCVC(value);
		}

		updateState({ [name]: value });
	};

	const renderFields = () => {
		return fields.map((field) => {
			return (
				<StyledInputCont gridArea={field.gridArea}>
					<input {...field} placeholder={field.name} onChange={handleChange} onFocus={handleFocus} />
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
				<PaymentCard {...state} />
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
