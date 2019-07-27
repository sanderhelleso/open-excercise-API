import React from 'react';
import ApiKey from './apiKey/ApiKey';
import Analytics from './analytics/Analytics';
import Chart from './chart/Chart';
import Container from '../common/Container';

const Dashboard = () => {
	return (
		<Container>
			<ApiKey />
			<Analytics />
			<Chart />
		</Container>
	);
};

export default Dashboard;
