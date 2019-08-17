import React, { useReducer, Fragment } from 'react';
import _fetch from '../../lib/_fetch';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Background from '../../img/Background.jpg';
import { User, Mail, Lock } from 'react-feather';
import Input from '../common/Input';
import Modal from '../common/modal/Modal';
import setQuotaAction from '../../actions/setQuotaAction';
import loginAction from '../../actions/loginAction';
import { connect } from 'react-redux';
import ButtonV2 from '../common/ButtonV2';
import { ArrowRight } from 'react-feather';
import InputV2 from '../common/InputV2';

const inputs = [
	{
		placeholder: 'Enter your email',
		type: 'email',
		name: 'email',
		label: {
			text: 'Email',
			htmlForm: 'email'
		}
	},
	{
		placeholder: 'Enter your password',
		type: 'password',
		name: 'password',
		label: {
			text: 'Password',
			htmlForm: 'password'
		}
	}
];

const Login = ({ setQuotaAction, loginAction }) => {
	const [ state, updateState ] = useReducer((state, newState) => ({ ...state, ...newState }), {
		email: '',
		password: ''
	});

	const handleChange = ({ target: { name, value } }) => {
		updateState({ [name]: value });
	};

	const renderInputs = () => {
		return inputs.map((input, i) => {
			return (
				<div className="input-cont">
					<InputV2 key={i} {...input} value={state[input.name]} onChange={handleChange} />
				</div>
			);
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await _fetch(`http://localhost:4000/auth/login`, 'POST', null, state);

			const data = await response.json();

			const { quota } = data;
			delete data.quota;

			setQuotaAction(quota);
			loginAction(data);
		} catch (error) {
			alert(error);
		}
	};

	const handleReset = (e) => {
		e.preventDefault();
	};

	const modalProps = {
		role: 'dialog',
		headerText: 'Reset Password',
		buttonText: 'Proceed',
		buttonClick: handleReset,
		triggerText: 'Forgot Password?',
		children: (
			<Fragment>
				<h1>Forgot Password</h1>
				<p style={{ marginBottom: '1rem' }}>
					Please enter your email below to reset your password. When you enter your email and click 'Proceed',
					you will recieve an email with further instructions.
				</p>
				<Input icon={<Mail color="#139ff2" />} placeholder="Enter your email" />
			</Fragment>
		)
	};

	return (
		<form onSubmit={handleSubmit}>
			{renderInputs()}
			<ButtonV2 text="Continue" icon={<ArrowRight />} />
		</form>
	);
};

const actions = {
	setQuotaAction,
	loginAction
};

export default connect(null, actions)(Login);

const StyledBg = styled.div`
	min-width: 100%;
	min-height: 100vh;
	overflow: hidden;
	background: url(${Background}) no-repeat center center fixed;
	background-size: cover;
`;

const StyledForm = styled.form`
	margin: 0 auto;
	text-align: center;
	width: 30%;
	max-width: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: #f1f1f1;
	border-radius: 5px;
	padding: 2rem;
	@media screen and (max-width: 1000px) {
		max-width: 70%;
		width: 70%;
	}
`;

const StyledHeader = styled.h1`
	font-size: 1.5rem;
	margin: 0.5rem 0;
	display: inline-block;
`;

const StyledSpan = styled.span`
	display: flex;
	justify-content: center;
	font-size: 0.75rem;
	transition: 0.3s all ease-in-out;
	margin-bottom: 1rem;
	:hover {
		cursor: pointer;
		color: #0e84c9;
	}
`;
