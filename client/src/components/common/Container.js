import React from 'react';
import styled from 'styled-components';
import { fadeInPure } from '../../lib/keyframes';

const Dashboard = ({ children }) => (
	<StyledContent id="main-container">
		<StyledMain>
			<StyledCont>{children}</StyledCont>
		</StyledMain>
	</StyledContent>
);

export default Dashboard;

const StyledContent = styled.main`
	animation: ${fadeInPure} 0.4s ease forwards;
	flex-grow: 1;
`;

const StyledMain = styled.div`
	min-width: 100%;
	min-height: 100vh;
	background-color: #fafafa;
	display: flex;
	justify-content: center;
`;

const StyledCont = styled.div`
	width: 85%;
	max-width: 1000px;
	display: grid;
	grid-row-gap: 3rem;
	padding: 3rem 0;

	h1 {
		font-size: 2.65rem;
	}
`;
