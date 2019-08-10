import React from 'react';
import styled from 'styled-components';

const Input = ({ type, value, onChange, placeholder, icon, name }) => {
	return (
		<InputContainer>
			{icon}
			<StyledInput type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
		</InputContainer>
	);
};

export default Input;

const InputContainer = styled.div`
	margin-bottom: 2rem;
	display: flex;
	align-items: center;
	justify-items: center;
`;

const StyledInput = styled.input`
	box-sizing: border-box;
	width: 100%;
	padding: 0.75rem 0.1rem;
	margin-left: 0.5rem;
	border: none;
	background: none;
	border-bottom: 0.5px solid #139ff2;
	:focus {
		border: 0.5px solid #139ff2;
	}
	::placeholder {
		color: #00000066;
	}
`;
