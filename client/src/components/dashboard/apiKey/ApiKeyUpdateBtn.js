import React from 'react';
import styled from 'styled-components';
import { RefreshCcw } from 'react-feather';
import generateApiKey from '../../../actions/generateApiKeyAction';
import { connect } from 'react-redux';

const ApiKeyUpdateBtn = ({ generateApiKey }) => {
	const _generateApiKey = () => {
		generateApiKey('qeqeq');
	};

	return (
		<StyledBtn onClick={_generateApiKey}>
			<RefreshCcw />
		</StyledBtn>
	);
};

const actions = {
	generateApiKey
};

export default connect(null, actions)(ApiKeyUpdateBtn);

const StyledBtn = styled.button`
	padding: 1.15rem;
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
	background-color: #12e2a3;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 12px 30px 0px rgba(0, 226, 163, 0.5);
	position: absolute;
	right: -0.25rem;

	svg {
		stroke: #ffffff;
		opacity: 0.8;
		height: 1.2rem;
		width: 1.2rem;
	}
`;
