import React, { useReducer } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import InputV2 from '../../common/InputV2';

const AccountInfo = ({ fields, initState }) => {
	const [ state, updateState ] = useReducer((state, newState) => ({ ...state, ...newState }), initState);

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
			<h2>Info</h2>
			<StyledForm>{renderFields()}</StyledForm>
		</section>
	);
};

const mapStateToProps = ({ auth }) => {
	const { email, name } = auth;

	const fields = [
		{
			disabled: true,
			name: 'email',
			label: {
				text: 'Email',
				htmlForm: 'email'
			}
		},
		{
			name: 'name',
			label: {
				text: 'Name',
				htmlForm: 'name'
			}
		}
	];

	const initState = { email, name };

	return { fields, initState };
};

export default connect(mapStateToProps, null)(AccountInfo);

const StyledForm = styled.form`
	display: flex;
	flex-direction: row;

	.form-section {
		margin-right: 4rem;
	}
`;
