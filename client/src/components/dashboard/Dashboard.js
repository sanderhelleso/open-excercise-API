import React from 'react';
import styled from 'styled-components';
import ApiKey from './apiKey/ApiKey';
import Analytics from './analytics/Analytics';

const Dashboard = () => {
	return (
		<Wrapper className="column">
			<Content>
				<StyledMain>
					<StyledCont>
						<ApiKey />
						<Analytics />
						<div className="section" />
					</StyledCont>
				</StyledMain>
			</Content>
		</Wrapper>
	);
};

export default Dashboard;

const Wrapper = styled.div`background-color: #fff;`;

const Content = styled.div`
	flex-grow: 1;
	overflow-y: auto;
`;

const StyledMain = styled.main`
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

	.section {
		background-color: #eeeeee;
		min-height: 300px;
		padding: 2rem;
	}
`;
