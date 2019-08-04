import React from 'react';
import styled from 'styled-components';
import ButtonV2 from '../../common/ButtonV2';

const AccountDanger = () => {
	return (
		<StyledDiv>
			<h2>Delete account</h2>
			<p>
				This action is not reversible and all data releated to the account will be deleted.{<br />} Your API key
				will no longer work and any active subscriptions will be cancelled.
			</p>
			<ButtonV2 text="delete" danger={true} />
		</StyledDiv>
	);
};

export default AccountDanger;

const StyledDiv = styled.div`
	padding: 2rem;
	margin-bottom: 4rem;
	border: 2px solid rgba(255, 73, 73, 0.5);
	border-radius: 4px;

	p {
		margin-bottom: 2rem;
	}
`;
