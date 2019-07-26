import React from 'react';
import styled from 'styled-components';
import { AreaChart, Area, Line, YAxis, XAxis, Legend, ResponsiveContainer, Tooltip } from 'recharts';

const generateData = () => {
	const data = Array(6).fill(0).map((_, i) => ({
		Period: 'Period ' + i,
		Requests: Math.floor(Math.random() * 10) + 2,
		amt: Math.floor(Math.random() * 10) + 2
	}));

	return data;
};

const Chart = () => {
	return (
		<StyledChartCont>
			<ResponsiveContainer width="100%">
				<AreaChart data={generateData()}>
					<defs>
						<linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#139ff2" stopOpacity={0.3} />
							<stop offset="95%" stopColor="#139ff2" stopOpacity={0} />
						</linearGradient>
					</defs>
					<XAxis dataKey="Period" dy={15} stroke="#e0e0e0" tick={{ fill: '#9e9e9e', fontWeight: '100' }} />
					<YAxis dx={-15} stroke="#e0e0e0" tick={{ fill: '#9e9e9e', fontWeight: '100' }} />
					<Tooltip />
					<Legend
						verticalAlign="top"
						align="right"
						wrapperStyle={{
							fontWeight: '100',
							marginBottom: '25px',
							paddingBottom: '25px',
							color: '#9e9e9e'
						}}
					/>
					<Line type="monotone" dataKey="Requests" stroke="#139ff2" activeDot={{ r: 6 }} />
					<Area
						type="monotone"
						dataKey="Requests"
						stroke="#139ff2"
						fillOpacity={1}
						fill="url(#colorRequests)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</StyledChartCont>
	);
};

export default Chart;

const StyledChartCont = styled.div`
	max-height: 350px;
	margin-top: 1rem;
	font-weight: 400;
	font-size: 0.9rem;
	background-color: #fefefe;
	border: 1.25px solid #eeeeee;
	border-radius: 4px;
	box-shadow: 0px 7.5px 15px rgba(0, 0, 0, 0.045);
	padding: 1.5rem;
	padding-right: 2.5rem;
	padding-bottom: 2.5rem;
`;
