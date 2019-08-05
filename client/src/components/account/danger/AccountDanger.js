import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonV2 from '../../common/ButtonV2';
import logoutAction from '../../../actions/logoutAction';
import { connect } from 'react-redux';
import _fetch from '../../../lib/_fetch';

const AccountDanger = ({ logoutAction }) => {
	const [ loading, setLoading ] = useState(false);

	const deleteAcc = async () => {
		setLoading(true);

		try {
			await _fetch('http://localhost:4000/auth/delete', 'DELETE');
			logoutAction();
		} catch (error) {
			alert(error);
			setLoading(false);
		}
	};

	return (
		<StyledDiv>
			<h2>Delete account</h2>
			<p>
				This action is not reversible and all data releated to the account will be deleted.{<br />} Your API key
				will no longer work and any active subscriptions will be cancelled.
			</p>
			<ButtonV2 text="delete" danger={true} disabled={loading} onClick={deleteAcc} />
		</StyledDiv>
	);
};

const actions = {
	logoutAction
};

export default connect(null, actions)(AccountDanger);

const StyledDiv = styled.div`
	padding: 2rem;
	margin-bottom: 4rem;
	border: 2px solid rgba(255, 73, 73, 0.5);
	border-radius: 4px;

	p {
		margin-bottom: 2rem;
	}
`;
