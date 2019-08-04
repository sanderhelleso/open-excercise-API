import React from 'react';
import styled from 'styled-components';

const InputV2 = ({ value, onChange, disabled, label: { text, htmlFor } }) => {
	return (
		<StyledDiv className="form-section">
			<StyledLabel htmlFor={htmlFor}>{text}</StyledLabel>
			<StyledInput {...{ value, onChange, disabled }} />
		</StyledDiv>
	);
};

export default InputV2;

const StyledDiv = styled.div``;

export const inputStyles = `
    outline: none;
    box-shadow: none;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    border-radius: 4px;
    transition: 0.3s ease-in-out;
    padding: 15px 5px;
    min-width: 250px;
`;

const StyledInput = styled.input`
	${inputStyles};
	border: 1.5px solid #e0e0e0;
	&::placeholder {
		opacity: 0.7;
	}
	&:focus,
	&:active {
		border: 1.5px solid #139ff2;
		box-shadow: 0 0 0 2px #ecfcff;
	}
	&:disabled {
		background-color: #e0e0e0;
		color: #9e9e9e;
		cursor: not-allowed;

		&:focus,
		&:active {
			border: 1.5px solid #e0e0e0;
			box-shadow: none;
		}
	}
`;

const StyledLabel = styled.label`
	font-weight: 400;
	margin-bottom: 0.75rem;
	display: block;
	font-size: 0.8rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	opacity: 0.6;
`;
