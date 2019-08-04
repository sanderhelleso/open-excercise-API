import React, { useReducer } from 'react';
import InputV2 from '../../common/InputV2';

const fields = [
	{
		name: 'newPassword',
		placeholder: 'Secret password',
		label: {
			text: 'New Password',
			htmlForm: 'newPassword'
		}
	},
	{
		name: 'confirmNewPassword',
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

	const handleChange = ({ target: { name, value } }) => {
		updateState({ [name]: value });
	};

	const renderFields = () => {
		return fields.map((field, i) => {
			return <InputV2 key={i} {...field} value={state[field.name]} onChange={handleChange} />;
		});
	};

	return (
		<section>
			<div className="account-section-header">
				<h2>Password</h2>
				<button>update</button>
			</div>
			<form>{renderFields()}</form>
		</section>
	);
};

export default AccountPassword;
