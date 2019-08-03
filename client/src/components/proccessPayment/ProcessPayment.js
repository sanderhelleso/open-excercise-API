import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Container from '../common/Container';
import Loader from '../common/Loader';
import { fadeIn, fadeOut } from '../../lib/keyframes';
import _fetch from '../../lib/_fetch';
import { connect } from 'react-redux';
import setNotProccesingPaymentAction from '../../actions/setNotProccessingPaymentAction';

const ProcessPayment = ({ body, setNotProccesingPaymentAction }) => {
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		proccess();
	}, []);

	const proccess = async () => {
		try {
			const response = await _fetch(`http://localhost:4000/customers/create`, 'POST', null, body);
			const data = await response.json();

			setLoading(false);
			setTimeout(() => {
				setNotProccesingPaymentAction();
			}, 450);
		} catch (error) {
			alert(error);
		}
	};

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

const mapStateToProps = ({ auth, plans, proccessPayment }) => {
	const { selectedOption: { id } } = plans;
	const { source, ccLast4 } = proccessPayment;

	const body = {
		email: auth.email,
		plan: id,
		source,
		ccLast4
	};

	return { body };
};

const actions = {
	setNotProccesingPaymentAction
};

export default connect(mapStateToProps, actions)(ProcessPayment);

const StyledDiv = styled.main`
	animation: ${({ loading }) => (loading ? css`${fadeIn} 0.3s;` : css`${fadeOut} 0.5s;`)} ease forwards;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	span {
		margin-bottom: 3rem;
	}
`;
