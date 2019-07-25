import React from 'react';
import styled from 'styled-components';
import { Eye } from 'react-feather';

const ApiKeySeeBtn = () => {
	return (
		<StyledBtn>
			<Eye />
		</StyledBtn>
	);
};

export default ApiKeySeeBtn;

const StyledBtn = styled.button`
	padding: 0.85rem 1rem;
	border: none;
	cursor: pointer;
	outline: none;
	text-transform: uppercase;
	letter-spacing: 1.25px;
	border-radius: 4px;
	font-weight: 400;
	transition: 0.3s ease-in-out;
	font-family: 'Poppins', sans-serif;
	transform: scale(1.001);
	position: relative;
	line-height: 2rem;
	background-color: #139ff2;
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		stroke: #ffffff;
		opacity: 0.8;
		height: 1.15rem;
		width: 1.15rem;
	}
`;
