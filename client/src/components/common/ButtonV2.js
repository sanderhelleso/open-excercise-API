import React from 'react';
import styled from 'styled-components';

const ButtonV2 = ({ text, disabled, flat, danger, icon, onClick }) => {
	return (
		<StyledButton flat={flat} danger={danger} disabled={disabled} onClick={onClick}>
			{text}
			{icon ? icon : null}
		</StyledButton>
	);
};

export default ButtonV2;

const StyledButton = styled.button`
	cursor: pointer;
	padding: 0.75rem 2rem;
	border: none;
	outline: none;
	text-transform: uppercase;
	letter-spacing: 1px;
	border-radius: 4px;
	font-weight: 400;
	transition: 0.3s ease-in-out;
	max-width: 125px;
	max-height: 55px;
	position: relative;

	${({ disabled, flat, danger }) => {
		if (disabled) return disabledStyles;
		if (flat) return flatStyles;
		if (danger) return dangerlStyles;

		return normalStyles;
	}};

	svg {
		position: absolute;
		right: 20px;
		top: 20px;
		opacity: 0.5;
		height: 1.25rem;
		width: 1.25rem;
	}
`;

const disabledStyles = `
	color: #9e9e9e;
	box-shadow: none;
	background-color: #eeeeee;
	cursor: not-allowed;
`;

const flatStyles = `
	color: #139ff2;
	border: 1px solid rgba(19, 159, 242, 0.7);
	background-color: transparent;
`;

const normalStyles = `
	color: #ffffff;
	box-shadow: 0px 12px 30px 0px rgba(19, 159, 242, 0.5);
	background-color: #139ff2;
`;

const dangerlStyles = `
	color: #ffffff;
	box-shadow: 0px 12px 30px 0px rgba(255, 73, 73, 0.5);
	background-color: #ff4949;
`;
