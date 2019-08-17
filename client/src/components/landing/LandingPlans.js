import React from 'react';
import styled from 'styled-components';
import PlanOptions from '../plans/PlanOptions';
import ButtonV2 from '../common/ButtonV2';
import { withRouter } from 'react-router-dom';

const LandingPlans = ({ history }) => {
	return (
		<StyledSection>
			<StyledInner>
				<StyledHeadingCont>
					<h2>Flexible plans</h2>
					<p>Choose the plan that is right for you and your business</p>
				</StyledHeadingCont>
				<PlanOptions />
				<ButtonV2 text="Purchase Now" onClick={() => history.push('/plans')} />
			</StyledInner>
		</StyledSection>
	);
};

export default withRouter(LandingPlans);

const StyledSection = styled.section`
	position: relative;
	display: flex;
	align-content: center;
	justify-content: center;
	padding: 8rem 0;
	position: relative;
	background-color: #fafafa;
	margin-top: -10rem;
	border-radius: 0% 100% 0% 100% / 86% 33% 67% 14%;
	text-align: center;

	@media screen and (max-width: 1300px) {
		margin-top: 0;
		border-radius: 0;
		padding: 4rem 0;
	}
`;

const StyledInner = styled.div`
	margin-top: 5rem;

	@media screen and (max-width: 1300px) {
		margin-top: 0;
		border-radius: 0;
		padding: 4rem 0;
		margin: 0 auto;
	}

	button {
		margin-top: 5rem;

		@media screen and (max-width: 950px) {
			margin-top: 0;
		}
	}
`;

const StyledHeadingCont = styled.div`
	position: relative;
	max-width: 375px;
	margin: 0 auto;
	margin-bottom: 5rem;

	@media screen and (max-width: 450px) {
		max-width: 320px;
	}

	h2 {
		text-transform: uppercase;
		font-weight: 800;
		font-size: 2.75rem;
		z-index: 2;
		line-height: 1.4;
		position: relative;

		@media screen and (max-width: 950px) {
			font-size: 2rem;
		}
	}

	.sep {
		z-index: 1;
		position: absolute;
		right: 0;
		top: 0;
		min-width: 120px;
		max-height: 120px;
		min-height: 120px;
		border-radius: 50%;
		opacity: 0.3;
		background: #56ccf2; /* fallback for old browsers */
		background: -webkit-linear-gradient(to left, #2f80ed, #56ccf2); /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(
			to left,
			#2f80ed,
			#56ccf2
		); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}
`;
