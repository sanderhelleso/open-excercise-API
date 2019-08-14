import React from 'react';
import styled from 'styled-components';
import ButtonV2 from '../common/ButtonV2';

const LandingHeader = () => {
	return (
		<StyledSection>
			<div>
				<StyledInner>
					<h1>Open Excercise API</h1>
					<StyledBtnCont>
						<ButtonV2 text="Get Started" />
						<ButtonV2 text="Documentation" flat={true} />
					</StyledBtnCont>
				</StyledInner>
			</div>
			<div>
				<img src={`${process.env.PUBLIC_URL}/img/landing.png`} />
			</div>
		</StyledSection>
	);
};

export default LandingHeader;

const StyledSection = styled.section`
	position: relative;
	display: flex;
	align-content: center;
	justify-content: center;

	div {
		min-height: 100%;
		min-width: 200px;
		position: relative;
	}

	img {
		width: 800px;
		height: auto;
		margin-top: 5rem;
	}
`;

const StyledInner = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin-left: 3rem;

	h1 {
		font-size: 3rem;
		font-weight: 800;
		text-transform: uppercase;
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
