import React from 'react';
import styled from 'styled-components';
import AnalyticsCard from './AnalyticsCard';

const Analytics = () => {
	return (
		<div>
			<h2>Analytics</h2>
			<StyledCont>
				<AnalyticsCard />
				<AnalyticsCard />
				<AnalyticsCard />
			</StyledCont>
		</div>
	);
};

export default Analytics;

const StyledCont = styled.div`
	display: grid;
	grid-column-gap: 3.5rem;
	grid-template-columns: repeat(3, 1fr);
	margin-top: 2rem;
`;
