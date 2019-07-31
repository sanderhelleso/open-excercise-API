import React from 'react';
import styled from 'styled-components';

const PlanBtn = () => {
	return <StyledBtn>Select</StyledBtn>;
};

export default PlanBtn;

const StyledBtn = styled.button`
	margin-top: 2rem;
	padding: 1rem 2.5rem;
	border: none;
	outline: none;
	text-transform: uppercase;
	letter-spacing: 1.25px;
	border-radius: 4px;
	font-weight: 400;
	transition: 0.3s ease-in-out;
	transform: scale(1.001);
	background-color: #139ff2;
	cursor: pointer;
	box-shadow: 0px 12px 30px 0px rgba(19, 159, 242, 0.5);
	font-size: 0.9rem;
	color: #ffffff;
	position: relative;
	min-width: 150px;
`;
