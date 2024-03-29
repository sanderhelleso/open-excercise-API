import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import Container from '../common/Container';
import Loader, { LoaderCont } from '../common/Loader';
import _fetch from '../../lib/_fetch';
import { connect } from 'react-redux';
import { Check } from 'react-feather';
import { withRouter } from 'react-router-dom';
import setNotProccesingPaymentAction from '../../actions/setNotProccessingPaymentAction';
import setSubDataAction from '../../actions/setSubDataAction';
import setQuotaAction from '../../actions/setQuotaAction';
import setSelectedPlanAction from '../../actions/setSelectedPlanAction';
import { optionsData } from '../../lib/planOptions';
import { fadeIn } from '../../lib/keyframes';

const ProcessPayment = ({
	body,
	setSelectedPlanAction,
	setQuotaAction,
	setNotProccesingPaymentAction,
	setSubDataAction,
	history
}) => {
	const [ loading, setLoading ] = useState(true);
	const [ showSucc, setShowSucc ] = useState(false);

	useEffect(() => {
		proccess();

		window.onbeforeunload = () => 'Please wait until the payment is proccessed';
		return () => (window.onbeforeunload = null);
	}, []);

	const proccess = async () => {
		try {
			const response = await _fetch(`http://localhost:4000/customers/create`, 'POST', null, body);
			const data = await response.json();
			const newOptionIndex = optionsData.indexOf(optionsData.find(({ id }, i) => id !== body.plan && i));

			setQuotaAction(data);
			setSubDataAction({ planID: body.plan, ccLast4: body.ccLast4 });
			setSelectedPlanAction(newOptionIndex);
			setLoading(false);

			setTimeout(() => {
				setShowSucc(true);
				setTimeout(() => {
					setNotProccesingPaymentAction();
					history.replace('/');
				}, 1000);
			}, 350);
		} catch (error) {
			setNotProccesingPaymentAction();
		}
	};

	const renderContent = () => {
		if (showSucc) {
			return (
				<StyledCheck>
					<Check />
				</StyledCheck>
			);
		}

		return (
			<Fragment>
				<span>
					<Loader size={60} color="#139ff2" />
				</span>
				<h1>Proccessing Payment</h1>
				<p>Hang thight while we upgrade your plan</p>
			</Fragment>
		);
	};

	return (
		<Container>
			<LoaderCont loading={loading}>{renderContent()}</LoaderCont>
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
	setSelectedPlanAction,
	setQuotaAction,
	setNotProccesingPaymentAction,
	setSubDataAction
};

export default connect(mapStateToProps, actions)(withRouter(ProcessPayment));

const StyledCheck = styled.div`
	animation: ${fadeIn} 0.3s ease forwards;
	border-radius: 50%;
	border: 6px solid #12e2a3;
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 90px;
	min-height: 90px;

	svg {
		height: 2rem;
		width: 2rem;
		stroke: #12e2a3;
	}
`;
