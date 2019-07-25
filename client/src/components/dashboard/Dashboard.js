import React from 'react';
import styled from 'styled-components';
import ApiKey from './apiKey/ApiKey';
import Analytics from './analytics/Analytics';

const Dashboard = () => {
	return (
		<StyledMain>
			<StyledCont>
				<ApiKey />
				<Analytics />
				<div className="section" />
			</StyledCont>
		</StyledMain>
	);
};

export default Dashboard;

const StyledMain = styled.main`
	min-width: 100%;
	min-height: 100vh;
	background-color: #fafafa;
	display: flex;
	justify-content: center;
`;

const StyledCont = styled.div`
	width: 70%;
	display: grid;
	grid-row-gap: 3rem;
	padding: 3rem 0;

	.section {
		background-color: #eeeeee;
		min-height: 300px;
		padding: 2rem;
	}
`;
