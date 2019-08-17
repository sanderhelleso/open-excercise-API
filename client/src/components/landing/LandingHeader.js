import React from 'react';
import styled from 'styled-components';
import ButtonV2 from '../common/ButtonV2';
import { withRouter } from 'react-router-dom';
import { fadeInPure } from '../../lib/keyframes';

const LandingHeader = ({ history }) => {
	return (
		<StyledSection>
			<StyledInner>
				<h1>Open Excercise API</h1>
				<p>
					Take your workout & fitness apps to the next level with our excercise data.
					<br />
					Get started for free today and recieve <span>10.000</span> monthly requests right now!
				</p>
				<StyledBtnCont>
					<ButtonV2 text="Get Started" onClick={() => history.push('/register')} />
					<ButtonV2 text="Documentation" flat={true} onClick={() => history.push('/documentation')} />
				</StyledBtnCont>
			</StyledInner>
			<div>
				<img src={`${process.env.PUBLIC_URL}/img/landing.png`} />
			</div>
		</StyledSection>
	);
};

export default withRouter(LandingHeader);

const StyledSection = styled.section`
	max-width: 70%;
	position: relative;
	display: flex;
	align-content: center;
	justify-content: center;
	min-height: 750px;
	margin: 0 auto;

	img {
		width: 800px;
		height: auto;
		margin-top: 8rem;
	}

	@media screen and (max-width: 1300px) {
		max-width: 90%;
		flex-direction: column-reverse;
		align-items: center;

		img {
			width: 400px;
			height: auto;
			margin-top: 4rem;
		}
	}
`;

const StyledInner = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin-bottom: 10rem;
	position: relative;
	min-width: 500px;
	margin-left: 200px;
	animation: ${fadeInPure} 0.7s ease forwards;
	text-align: center;

	h1 {
		font-size: 3.5rem;
		font-weight: 800;
		text-transform: uppercase;
		text-align: center;
	}

	span {
		font-weight: 800;
	}

	@media screen and (max-width: 1300px) {
		margin-left: 0;
	}

	@media screen and (max-width: 900px) {
		h1 {
			font-size: 2.5rem;
		}
	}

	@media screen and (max-width: 600px) {
		h1 {
			font-size: 2rem;
		}

		p {
			max-width: 60%;
			font-size: 12px;
			margin: 0 auto;
		}
	}
`;

const StyledBtnCont = styled.div`
	display: flex;
	margin-top: 2rem;
	justify-content: center;
	align-items: center;

	button {
		margin: auto 1rem;
	}

	@media screen and (max-width: 600px) {
		flex-direction: column-reverse;

		button {
			margin: 0.75rem 0;
		}
	}
`;
