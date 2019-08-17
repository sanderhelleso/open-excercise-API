import React, { useReducer } from 'react';
import _fetch from '../../lib/_fetch';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import InputV2 from '../common/InputV2';
import ButtonV2 from '../common/ButtonV2';
import { ArrowRight } from 'react-feather';

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
		name: 'password_confirm',
		placeholder: 'Confirm Password',
		label: {
			text: 'Confirm Password',
			htmlForm: 'password_confirm'
		}
	}
];

const Register = ({ history }) => {
	const [ state, updateState ] = useReducer((state, newState) => ({ ...state, ...newState }), {
		name: '',
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
					<InputV2 key={i} {...input} onChange={handleChange} />
				</div>
			);
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await _fetch(`http://localhost:4000/auth/register`, 'POST', null, state);
			alert('Check your email for verification code');
		} catch (error) {
			alert(error);
		}
	};

	return (
		<StyledMain>
			<StyledAside />
			<StyledCont>
				<div className="inner">
					<h2>Register</h2>
					<form>
						{renderInputs()}
						<ButtonV2 text="Continue" icon={<ArrowRight />} />
					</form>
				</div>
			</StyledCont>
		</StyledMain>
	);
};

export default withRouter(Register);

const StyledMain = styled.main`
	min-width: 100%;
	min-height: 100vh;
	display: flex;
`;

const StyledAside = styled.aside`
	min-width: 50%;
	max-width: 50%;
	min-height: 100vh;
	background-color: blue;
`;

const StyledCont = styled.div`
	min-width: 50%;
	max-width: 50%;
	background-color: #ffffff;
	display: flex;
	align-items: center;

	h2 {
		font-size: 2rem;
		text-transform: uppercase;
		font-weight: 800;
		margin-bottom: 4rem;
	}

	.inner {
		min-width: 70%;
		max-width: 70%;
		margin: 4rem auto;

		@media screen and (min-width: 1300px) {
			min-width: 550px;
			max-width: 550px;
		}
	}

	.input-cont {
		margin: 2rem 0;

		input {
			min-width: calc(100% - 20px);
		}
	}

	button {
		min-width: 100%;
		min-height: 60px;
		margin-top: 2rem;
	}
`;
