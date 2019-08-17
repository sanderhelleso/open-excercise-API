import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const negated = {
	login: 'register',
	register: 'login'
};

const NegateStage = ({ stage, history }) => {
	const renderLink = () => {
		return <StyledLink onClick={() => history.push(`/${negated[stage]}`)}>{negated[stage]}</StyledLink>;
	};

	return renderLink();
};

export default withRouter(NegateStage);

const StyledLink = styled.button`
	outline: none;
	border: 0;
	background-color: transparent;
	color: #9e9e9e;
	position: absolute;
	right: 2rem;
	top: 2rem;
	text-transform: uppercase;
	min-width: 100px;
	cursor: pointer;
`;
