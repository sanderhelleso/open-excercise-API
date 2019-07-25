import React from 'react';
import styled from 'styled-components';
import AnalyticsCard from './AnalyticsCard';
import { Activity, Calendar, BarChart } from 'react-feather';
import AnalyticsIcon from './AnalyticsIcon';

const cards = [
	{
		data: '5500',
		desc: 'Total remaining',
		icon: <Activity />
	},
	{
		data: '4500',
		desc: 'Total used',
		icon: <BarChart />
	},
	{
		data: '26.08',
		desc: 'Refilles at',
		icon: <Calendar />
	}
];

const Analytics = () => {
	const renderCards = () => {
		return cards.map(({ data, desc, icon }) => (
			<AnalyticsCard data={data} desc={desc} icon={<AnalyticsIcon icon={icon} />} />
		));
	};

	return (
		<div>
			<h2>Analytics</h2>
			<StyledCont>{renderCards()}</StyledCont>
		</div>
	);
};

export default Analytics;

const StyledCont = styled.div`
	display: grid;
	grid-column-gap: 3rem;
	grid-template-columns: repeat(3, 1fr);
	margin-top: 2rem;
`;
