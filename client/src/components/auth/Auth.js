import React, { Fragment, useEffect, useRef } from 'react';
import _fetch from '../../lib/_fetch';
import styled from 'styled-components';
import Cover from '../auth/Cover';
import { withRouter } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import NegateStage from './NegateStage';
import { withToastManager } from 'react-toast-notifications';
import { ArrowLeft } from 'react-feather';

const Auth = ({ toastManager, match, history }) => {
	const renderAuth = () => {
		let comp = <Login toastManager={toastManager} />;
		let heading = 'Login';

		if (match.url === '/register') {
			comp = <Register toastManager={toastManager} />;
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
			<Cover history={history} />
			<StyledCont>
				<div className="inner">
					<span>
						<ArrowLeft onClick={() => history.push('/')} />
					</span>
					{renderAuth()}
				</div>
			</StyledCont>
		</StyledMain>
	);
};

export default withToastManager(withRouter(Auth));

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
		position: relative;

		span {
			svg {
				stroke: #9e9e9e;
				opacity: 0.65;
				height: 3rem;
				width: 3rem;
				margin-bottom: 2rem;
				cursor: pointer;

				@media screen and (min-width: 1000px) {
					display: none;
				}

				@media screen and (max-width: 600px) {
					position: absolute;
					top: -2.5rem;
					left: 0;
					height: 2.5rem;
					width: 2.5rem;
				}
			}
		}

		@media screen and (min-width: 1300px) {
			min-width: 550px;
			max-width: 550px;
		}

		@media screen and (max-width: 1000px) {
			background-color: transparent;
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
		margin-top: 1.5rem;
	}

	@media screen and (min-width: 2200px) {
		min-width: 30%;
		max-width: 30%;
	}

	@media screen and (max-width: 1000px) {
		min-width: 100%;
		max-width: 100%;
		background: linear-gradient(rgba(255, 255, 255, 0.97), rgba(255, 255, 255, 0.97)),
			url(${process.env.PUBLIC_URL}${'/img/cover.jpg'});
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
	}

	@media screen and (max-width: 600px) {
		h2 {
			margin-top: 3rem;
		}
	}
`;
