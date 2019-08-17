import React, { Fragment } from 'react';
import _fetch from '../../lib/_fetch';
import styled from 'styled-components';
import Cover from '../auth/Cover';
import { withRouter } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import NegateStage from './NegateStage';

const Auth = ({ match }) => {
	const renderAuth = () => {
		let comp = <Login />;
		let heading = 'Login';
		if (match.url === '/register') {
			comp = <Register />;
			heading = 'Register';
		}

		return (
			<Fragment>
				<h2>{heading}</h2>
				{comp}
			</Fragment>
		);
	};

	return (
		<StyledMain>
			<NegateStage stage={match.url.split('').slice(1).join('')} />
			<Cover />
			<StyledCont>
				<div className="inner">{renderAuth()}</div>
			</StyledCont>
		</StyledMain>
	);
};

export default withRouter(Auth);

const StyledMain = styled.main`
	min-width: 100%;
	min-height: 100vh;
	display: flex;
	position: relative;
`;

const StyledCont = styled.div`
	min-width: 50%;
	max-width: 50%;
	background-color: #ffffff;
	display: flex;
	align-items: center;

	h2 {
		font-size: 2rem;
		text-transform: uppercase;
		font-weight: 800;
		margin-bottom: 2.5rem;
	}

	.inner {
		min-width: 70%;
		max-width: 70%;
		margin: 4rem auto;
		min-height: 700px;

		@media screen and (min-width: 1300px) {
			min-width: 550px;
			max-width: 550px;
		}
	}

	.input-cont {
		margin: 2rem 0;

		input {
			min-width: calc(100% - 20px);
		}
	}

	button {
		min-width: 100%;
		min-height: 60px;
		margin-top: 2.5rem;
	}

	@media screen and (min-width: 2200px) {
		min-width: 30%;
		max-width: 30%;
	}
`;
