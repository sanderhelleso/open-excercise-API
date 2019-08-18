import React, { useReducer } from 'react';
import _fetch from '../../lib/_fetch';
import styled from 'styled-components';
import setQuotaAction from '../../actions/setQuotaAction';
import loginAction from '../../actions/loginAction';
import { connect } from 'react-redux';
import ButtonV2 from '../common/ButtonV2';
import { ArrowRight } from 'react-feather';
import InputV2 from '../common/InputV2';
import { fadeInPure } from '../../lib/keyframes';
import { isEmail, isPassword } from '../../lib/validators';

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

	const { email, password } = state;

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

	return (
		<StyledForm onSubmit={handleSubmit}>
			{renderInputs()}
			<ButtonV2 text="Continue" icon={<ArrowRight />} disabled={!isEmail(email) || !isPassword(password)} />
		</StyledForm>
	);
};

const actions = {
	setQuotaAction,
	loginAction
};

export default connect(null, actions)(Login);

const StyledForm = styled.form`animation: ${fadeInPure} 0.9s ease forwards;`;
