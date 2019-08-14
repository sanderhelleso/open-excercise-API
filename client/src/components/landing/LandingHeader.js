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
	min-height: 750px;
	margin: 0 auto;

	img {
		width: 800px;
		height: auto;
		margin-top: 8rem;
	}
`;

const StyledInner = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin-bottom: 10rem;
	position: relative;
	min-width: 500px;
	animation: ${fadeInPure} 0.7s ease forwards;

	h1 {
		font-size: 3.5rem;
		font-weight: 800;
		text-transform: uppercase;
	}

	span {
		font-weight: 800;
	}
`;

const StyledBtnCont = styled.div`
	display: flex;
	margin-top: 2rem;

	button {
		margin-right: 2rem;
		min-width: 200px;
		min-height: 60px;
	}
`;
