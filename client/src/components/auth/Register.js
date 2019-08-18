import React, { useReducer } from 'react';
import _fetch from '../../lib/_fetch';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import InputV2 from '../common/InputV2';
import ButtonV2 from '../common/ButtonV2';
import { ArrowRight } from 'react-feather';
import { fadeInPure } from '../../lib/keyframes';
import { isEmptyObj, isPassword, isEmail, isName } from '../../lib/validators';
import toast from '../../lib/toast';

const inputs = [
	{
		type: 'text',
		name: 'name',
		placeholder: 'Enter your full name',
		label: {
			text: 'Name',
			htmlForm: 'name'
		}
	},
	{
		type: 'email',
		name: 'email',
		placeholder: 'Enter your email',
		label: {
			text: 'Email',
			htmlForm: 'email'
		}
	},
	{
		type: 'password',
		name: 'password',
		placeholder: 'Enter a password',
		label: {
			text: 'Password',
			htmlForm: 'password'
		}
	},
	{
		type: 'password',
		name: 'confirmPassword',
		placeholder: 'Confirm Password',
		label: {
			text: 'Confirm Password',
			htmlForm: 'confirmPassword'
		}
	}
];

const Register = ({ toastManager }) => {
	const [ state, updateState ] = useReducer((state, newState) => ({ ...state, ...newState }), {
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	const { password, confirmPassword, email, name } = state;

	const handleChange = ({ target: { name, value } }) => {
		updateState({ [name]: value });
	};

	const renderInputs = () => {
		return inputs.map((input, i) => {
			return (
				<div className="input-cont">
					<InputV2 key={i} {...input} onChange={handleChange} />
				</div>
			);
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await _fetch(`http://localhost:4000/auth/register`, 'POST', null, state);
			toast(toastManager, false, 'Check your email for verification code');
		} catch (error) {
			toast(toastManager, true, error.message);
		}
	};

	const isValidForm = () => {
		return (
			isEmptyObj(state) ||
			!isPassword(password) ||
			!isEmail(email) ||
			!isName(name) ||
			password !== confirmPassword
		);
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			{renderInputs()}
			<ButtonV2 text="Continue" icon={<ArrowRight />} disabled={isValidForm()} />
		</StyledForm>
	);
};

export default withRouter(Register);

const StyledForm = styled.form`animation: ${fadeInPure} 0.9s ease forwards;`;
