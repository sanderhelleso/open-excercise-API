import React, { useReducer } from 'react';
import InputV2 from '../../common/InputV2';
import ButtonV2 from '../../common/ButtonV2';
import { isPassword } from '../../../lib/validators';

const fields = [
	{
		name: 'newPassword',
		type: 'password',
		placeholder: 'Secret password',
		label: {
			text: 'New Password',
			htmlForm: 'newPassword'
		}
	},
	{
		name: 'confirmNewPassword',
		type: 'password',
		placeholder: 'Secret password',
		label: {
			text: 'Confirm New Password',
			htmlForm: 'confirmNewPassword'
		}
	}
];

const AccountPassword = () => {
	const [ state, updateState ] = useReducer((state, newState) => ({ ...state, ...newState }), {
		newPassword: '',
		confirmNewPassword: ''
	});

	const { newPassword, confirmNewPassword } = state;

	const handleChange = ({ target: { name, value } }) => {
		updateState({ [name]: value });
	};

	const renderFields = () => {
		return fields.map((field, i) => {
			return <InputV2 key={i} {...field} value={state[field.name]} onChange={handleChange} />;
		});
	};

	const compare = () => {
		return isPassword(newPassword) && newPassword === confirmNewPassword;
	};

	return (
		<section>
			<div className="account-section-header">
				<h2>Password</h2>
				<ButtonV2 text="update" disabled={!compare()} />
			</div>
			<form>{renderFields()}</form>
		</section>
	);
};

export default AccountPassword;
