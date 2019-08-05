import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import InputV2 from '../../common/InputV2';
import ButtonV2 from '../../common/ButtonV2';
import { isEmptyObj, isName, shallowEqual } from '../../../lib/validators';

const AccountInfo = ({ fields, initState }) => {
	const [ state, updateState ] = useReducer((state, newState) => ({ ...state, ...newState }), initState);

	const handleChange = ({ target: { name, value } }) => {
		updateState({ [name]: value });
	};

	const renderFields = () => {
		return fields.map((field, i) => {
			return <InputV2 key={i} {...field} value={field.value || state[field.name]} onChange={handleChange} />;
		});
	};

	return (
		<section>
			<div className="account-section-header">
				<h2>Info</h2>
				<ButtonV2
					text="update"
					disabled={isEmptyObj(state) || !isName(state.name) || shallowEqual(initState, state)}
				/>
			</div>
			<form>{renderFields()}</form>
		</section>
	);
};

const mapStateToProps = ({ auth }) => {
	const { email, name } = auth;

	const fields = [
		{
			disabled: true,
			name: 'email',
			placeholder: 'johndoe@mail.com',
			value: email,
			label: {
				text: 'Email',
				htmlForm: 'email'
			}
		},
		{
			name: 'name',
			placeholder: 'John Doe',
			label: {
				text: 'Name',
				htmlForm: 'name'
			}
		}
	];

	const initState = { name };

	return { fields, initState };
};

export default connect(mapStateToProps, null)(AccountInfo);
