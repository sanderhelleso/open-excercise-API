import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AnalyticsCard from './AnalyticsCard';
import { Activity, Calendar, BarChart } from 'react-feather';
import AnalyticsIcon from './AnalyticsIcon';
import openSocket from 'socket.io-client';
import { connect } from 'react-redux';

const MAX_REQUESTS = 10000;

const socket = openSocket('http://localhost:4001');

const nextMonthStr = (date) => {
	const refilledDate = new Date(date);
	const nextRefillDate = new Date(refilledDate.getFullYear(), refilledDate.getMonth() + 1, refilledDate.getDate());

	const [ _, month, day ] = nextRefillDate.toString().split(' ');
	return `${addZero(day)}. ${month}`;
};

const addThousandSep = (n) => {
	if (typeof n == 'number') n = String(n);

	if (n.length > 4) {
		n = n.split('');
		n.splice(2, 0, '.');
		return n.join('');
	}

	return n;
};

const addZero = (n) => (n < 10 ? `0${n}` : n);

const Analytics = ({ requests_remaining, api_key, refilled_at }) => {
	const [ inited, setInited ] = useState(false);
	const [ _requests_remaining, setRequestsRemaining ] = useState(requests_remaining);

	useEffect(
		() => {
			if (inited) {
				socket.emit('remove_client_key', api_key);
			} else {
				setInited(true);
			}

			socket.emit('recieve_client_key', api_key);

			socket.on(api_key, (data) => {
				setRequestsRemaining(data);
			});
		},
		[ api_key ]
	);

	const cards = [
		{
			data: addThousandSep(_requests_remaining),
			desc: 'Total remaining',
			icon: <Activity />
		},
		{
			data: addThousandSep(MAX_REQUESTS - _requests_remaining),
			desc: 'Total used',
			icon: <BarChart />
		},
		{
			data: nextMonthStr(refilled_at),
			desc: 'Refilles at',
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

const mapStateToProps = ({ quota }) => {
	return { ...quota };
};

export default connect(mapStateToProps, null)(Analytics);

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
