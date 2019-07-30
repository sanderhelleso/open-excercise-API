import React, { useReducer } from 'react';
import styled from 'styled-components';
import PaymentCard from './PaymentFormCard';

import { formatCreditCardNumber, formatCVC, formatExpirationDate } from '../../../lib/creditCard';
import PaymentFormHeader from './PaymentFormHeader';
import PaymentFormInput from './PaymentFormInput';
import PaymentFormBtn from './PaymentFormBtn';

const fields = [
	{
		name: 'number',
		type: 'tel',
		placeholder: 'Card Number',
		pattern: '[d| ]{16,22}',
		gridArea: 'cardNumber'
	},
	{
		name: 'name',
		type: 'text',
		placeholder: 'Name',
		gridArea: 'cardName'
	},
	{
		placeholder: 'Valid thru',
		name: 'expiry',
		type: 'tel',
		pattern: 'dd/dd',
		gridArea: 'cardValid'
	},
	{
		placeholder: 'CVC',
		name: 'cvc',
		type: 'tel',
		pattern: 'd{3,4}',
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

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const renderFields = () => {
		return fields.map((field) => {
			return (
				<PaymentFormInput
					field={field}
					value={state[field.name]}
					handleChange={handleChange}
					handleFocus={handleFocus}
				/>
			);
		});
	};

	return (
		<StyledCont>
			<PaymentFormHeader />
			<StyledDiv>
				<PaymentCard {...state} />
				<StyledForm onSubmit={handleSubmit}>
					{renderFields()}
					<PaymentFormBtn />
				</StyledForm>
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
	min-height: 420px;
	max-height: 420px;
	justify-content: center;
	align-items: center;
`;

const StyledDiv = styled.div`
	display: flex;
	flex-direction: row;
	padding-top: 1rem;
`;

const StyledForm = styled.form`
	display: grid;
	grid-template: 'cardNumber cardNumber' 'cardName cardName' 'cardValid cardCVC' 'paymentBtn paymentBtn';
	grid-column-gap: 2rem;
	grid-row-gap: 1rem;
	max-height: 150px;
	margin-right: 6rem;
	margin-top: 0.7rem;
`;
