import React from 'react';
import styled from 'styled-components';

const Dashboard = ({ children }) => (
	<StyledContent>
		<StyledMain>
			<StyledCont>{children}</StyledCont>
		</StyledMain>
	</StyledContent>
);

export default Dashboard;

const StyledContent = styled.div`
	flex-grow: 1;
	overflow-y: auto;
	max-height: 100vh;
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
`;
