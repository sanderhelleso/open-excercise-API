import React from 'react';
import styled from 'styled-components';
import AnalyticsCard from './AnalyticsCard';
import { Activity } from 'react-feather';
import AnalyticsIcon from './AnalyticsIcon';

const cards = [
	{
		title: 'Remaining',
		desc: 'Total requests remaining',
		icon: <Activity />
	},
	{
		title: 'Usage',
		desc: 'Total requests used',
		icon: <Activity />
	},
	{
		title: 'Next Refill',
		desc: 'Date requests will be refilled',
		icon: <Activity />
	}
];

const Analytics = () => {
	const renderCards = () => {
		return cards.map(({ title, desc, icon }) => (
			<AnalyticsCard title={title} desc={desc} icon={<AnalyticsIcon icon={icon} />} />
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
