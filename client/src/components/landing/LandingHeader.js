import React from 'react';
import styled from 'styled-components';

const LandingHeader = () => {
	return (
		<StyledSection>
			<div>
				<StyledInner>
					<h1>Open Excercise API</h1>
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
	justify-content: right;
	align-items: center;
	margin-left: 3rem;

	h1 {
		font-size: 3rem;
		font-weight: 800;
		text-transform: uppercase;
	}
`;
