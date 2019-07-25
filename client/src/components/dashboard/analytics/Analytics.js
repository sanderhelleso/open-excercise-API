import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AnalyticsCard from './AnalyticsCard';
import { Activity, Calendar, BarChart } from 'react-feather';
import AnalyticsIcon from './AnalyticsIcon';
import openSocket from 'socket.io-client';
import { connect } from 'react-redux';

const MAX_REQUESTS = 10000;
const socket = openSocket('http://localhost:4001');

const Analytics = ({ requests_remaining, api_key }) => {
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
			data: _requests_remaining,
			desc: 'Total remaining',
			icon: <Activity />
		},
		{
			data: MAX_REQUESTS - _requests_remaining,
			desc: 'Total used',
			icon: <BarChart />
		},
		{
			data: '26.08',
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
	const { requests_remaining, api_key } = quota;
	return { requests_remaining, api_key };
};

export default connect(mapStateToProps, null)(Analytics);

const StyledCont = styled.div`
	display: grid;
	grid-column-gap: 3rem;
	grid-template-columns: repeat(3, 1fr);
	margin-top: 2rem;
`;
