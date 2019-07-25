import React, { useReducer } from 'react';
import { Form, Input, Button } from 'antd';
import _fetch from '../../lib/_fetch';
import login from '../../lib/login';

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

const Login = () => {
	const [ state, updateState ] = useReducer((state, newState) => ({ ...state, ...newState }), {
		email: '',
		password: ''
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		login(false, state);
	};

	return (
		<div className="Wrapper">
			<h1 style={{ textAlign: 'center' }}>Login</h1>

			{inputs.map((input) => (
				<Form.Item key={input.type}>
					<Input
						placeholder={input.placeholder}
						type={input.type}
						required={input.required}
						value={state[input.type]}
						onChange={(e) => updateState({ [input.type]: e.target.value })}
					/>
				</Form.Item>
			))}
			<div style={{ textAlign: 'center' }}>
				<Button type="primary" onClick={handleSubmit}>
					Log in
				</Button>
				<a style={{ paddingLeft: '1rem' }} href="/register">
					Register now!
				</a>

				<Form.Item />
			</div>
		</div>
	);
};

export default Login;
