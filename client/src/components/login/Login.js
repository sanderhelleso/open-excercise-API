import React, { useReducer } from 'react';
import _fetch from '../../lib/_fetch';
import login from '../../lib/login';
import { withRouter } from 'react-router-dom';

const inputs = [
	{
		placeholder: 'Enter your email',
		type: 'email',
		required: true
	},
	{
		placeholder: 'Enter your password',
		type: 'password',
		required: true
	}
];

const Login = ({ history }) => {
	const [ state, updateState ] = useReducer((state, newState) => ({ ...state, ...newState }), {
		email: '',
		password: ''
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		login(false, state);
	};

	return (
		<form className="Wrapper">
			<h1 style={{ textAlign: 'center' }}>Login</h1>

			{inputs.map((input) => (
				<div key={input.type}>
					<input
						placeholder={input.placeholder}
						type={input.type}
						required={input.required}
						value={state[input.type]}
						onChange={(e) => updateState({ [input.type]: e.target.value })}
					/>
				</div>
			))}
			<div style={{ textAlign: 'center' }}>
				<button type="primary" onClick={handleSubmit}>
					Log in
				</button>

				<a style={{ paddingLeft: '1rem' }} onClick={() => history.push('/register')}>
					Register now!
				</a>
			</div>
		</form>
	);
};

export default withRouter(Login);
