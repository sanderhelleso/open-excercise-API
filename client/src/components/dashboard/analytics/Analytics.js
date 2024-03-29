import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AnalyticsCard from './AnalyticsCard';
import { Activity, Calendar, BarChart } from 'react-feather';
import AnalyticsIcon from './AnalyticsIcon';
import openSocket from 'socket.io-client';
import { connect } from 'react-redux';
import addChartPeriodAction from '../../../actions/addChartPeriodAction';
import addChartPeriodDataAction from '../../../actions/addChartPeriodDataAction';
import { nextMonthStr, HALF_HOUR } from '../../../lib/analytics';

const socket = openSocket('http://localhost:4001');

const Analytics = ({
	requests_remaining,
	requests_limit,
	api_key,
	refilled_at,
	addChartPeriodAction,
	addChartPeriodDataAction
}) => {
	const [ inited, setInited ] = useState(false);
	const [ periodInterval, setPeriodInterval ] = useState();
	const [ _requests_remaining, setRequestsRemaining ] = useState(requests_remaining);

	useEffect(
		() => {
			if (inited) {
				socket.emit('remove_client_key', api_key);
			} else {
				const interval = setInterval(() => {
					addChartPeriodAction();
				}, HALF_HOUR);

				setPeriodInterval(interval);
				setInited(true);
			}

			socket.emit('recieve_client_key', api_key);

			socket.on(api_key, (data) => {
				setRequestsRemaining(data);
				addChartPeriodDataAction();
			});

			return () => {
				clearInterval(periodInterval);
			};
		},
		[ api_key ]
	);

	const cards = [
		{
			data: _requests_remaining,
			desc: 'Total remaining',
			icon: <Activity />
		},
		{
			data: requests_limit - _requests_remaining,
			desc: 'Total used',
			icon: <BarChart />
		},
		{
			data: nextMonthStr(refilled_at),
			desc: 'Refills at',
			icon: <Calendar />
		}
	];

	const renderCards = () => {
		return cards.map(({ data, desc, icon }, i) => (
			<AnalyticsCard key={i} data={data} desc={desc} icon={<AnalyticsIcon icon={icon} />} />
		));
	};

	return (
		<div>
			<h2>Analytics</h2>
			<StyledCont>{renderCards()}</StyledCont>
		</div>
	);
};

const mapStateToProps = ({ quota }) => ({ ...quota });

const actions = {
	addChartPeriodAction,
	addChartPeriodDataAction
};

export default connect(mapStateToProps, actions)(Analytics);

const StyledCont = styled.div`
	display: grid;
	grid-column-gap: 3rem;
	grid-template-columns: repeat(3, 1fr);
	margin-top: 2rem;

	@media screen and (max-width: 1010px) {
		grid-template-columns: 1fr;

		.ana-card {
			border-radius: 0;
		}

		.ana-card:first-child {
			border-top-left-radius: 4px;
			border-top-right-radius: 4px;
		}

		.ana-card:last-child {
			border-bottom-left-radius: 4px;
			border-bottom-right-radius: 4px;
		}
	}
`;
