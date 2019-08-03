import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from '../common/Container';
import Loader from '../common/Loader';
import { fadeIn, fadeOut } from '../../lib/keyframes';

const ProcessPayment = () => {
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<Container>
			<StyledDiv loading={loading}>
				<span>
					<Loader size={60} color="#139ff2" />
				</span>
				<h1>Proccesing Payment</h1>
				<p>Hang thight while we upgrade your plan</p>
			</StyledDiv>
		</Container>
	);
};

export default ProcessPayment;

const StyledDiv = styled.main`
	animation: ${({ loading }) => (loading ? fadeIn : fadeOut)} 0.4s ease forwards;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	span {
		margin-bottom: 3rem;
	}
`;
