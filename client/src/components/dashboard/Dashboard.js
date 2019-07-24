import React from 'react';
import styled from 'styled-components';

const Dashboard = () => {
	return (
		<StyledMain>
			<StyledCont>
				<div />
				<div />
				<div />
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

	div {
		background-color: #eeeeee;
		min-height: 300px;
	}
`;
