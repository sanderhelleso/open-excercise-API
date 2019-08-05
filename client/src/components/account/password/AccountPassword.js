import React, { useReducer } from 'react';
import InputV2 from '../../common/InputV2';
import ButtonV2 from '../../common/ButtonV2';
import { isPassword } from '../../../lib/validators';
import _fetch from '../../../lib/_fetch';

const fields = [
	{
		name: 'password',
		type: 'password',
		placeholder: 'Secret password',
		label: {
			text: 'New Password',
			htmlForm: 'newPassword'
		}
	},
	{
		name: 'confirmPassword',
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
		password: '',
		confirmPassword: '',
		loading: false
	});

	const { password, confirmPassword, loading } = state;

	const handleChange = ({ target: { name, value } }) => {
		updateState({ [name]: value });
	};

	const renderFields = () => {
		return fields.map((field, i) => {
			return <InputV2 key={i} {...field} value={state[field.name]} onChange={handleChange} />;
		});
	};

	const compare = () => {
		return isPassword(password) && password === confirmPassword;
	};

	const update = async () => {
		updateState({ loading: true });

		try {
			await _fetch('http://localhost:4000/auth/update-password', 'PATCH', null, { password });
			return updateState({ password: '', confirmPassword: '', loading: false });
		} catch (error) {
			alert(error);
		}

		updateState({ loading: false });
	};

	return (
		<section>
			<div className="account-section-header">
				<h2>Password</h2>
				<ButtonV2 text="update" disabled={!compare() || loading} onClick={update} />
			</div>
			<form>{renderFields()}</form>
		</section>
	);
};

export default AccountPassword;
