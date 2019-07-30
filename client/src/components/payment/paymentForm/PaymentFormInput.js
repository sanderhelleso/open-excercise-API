import React from 'react';
import styled from 'styled-components';

const PaymentFormInput = ({ field, value, handleChange, handleFocus }) => (
	<StyledInputCont gridArea={field.gridArea}>
		<input {...field} value={value} onChange={handleChange} onFocus={handleFocus} required={true} />
	</StyledInputCont>
);

export default PaymentFormInput;

const StyledInputCont = styled.div`
	grid-area: ${({ gridArea }) => gridArea};
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
