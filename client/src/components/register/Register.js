import React, { useReducer } from 'react';
import { Input, Form, Button, Select } from 'antd';
import _fetch from '../../lib/_fetch';
import login from '../../lib/login';

const { Option } = Select;

const inputs = [
	{
		label: 'Full Name',
		type: 'text',
		name: 'name',
		required: true
	},
	{
		label: 'Email',
		type: 'email',
		name: 'email',
		required: true
	},
	{
		label: 'Password',
		type: 'password',
		name: 'password',
		required: true
	},
	{
		label: 'Confirm Password',
		type: 'password',
		name: 'password_confirm'
	}
];

const purposes = [ 'Web Design', 'Personal Use', 'Mobile App' ];

const Register = () => {
	const [ state, updateState ] = useReducer((state, newState) => ({ ...state, ...newState }), {
		name: '',
		email: '',
		password: '',
		purpose: ''
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		login(true, state);
	};

	return (
		<div className="Wrapper">
			<h1 style={{ textAlign: 'center' }}>Register for Open Excercise API</h1>
			<Form onSubmit={handleSubmit}>
				{inputs.map((input) => (
					<Form.Item key={input.label} label={input.label}>
						<Input
							required={input.required}
							type={input.type}
							value={state[input.name]}
							onChange={(e) => updateState({ [input.name]: e.target.value })}
						/>
					</Form.Item>
				))}
				<Form.Item label="Purpose">
					<Select onChange={(value) => updateState({ purpose: value })}>
						{purposes.map((purpose) => (
							<Option key={purpose} value={purpose}>
								{purpose}
							</Option>
						))}
					</Select>
				</Form.Item>
				<Form.Item>
					<Button style={{ width: '100%' }} type="primary" onClick={handleSubmit}>
						Register
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Register;
