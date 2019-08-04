import React from 'react';
import Container from '../common/Container';
import AccountBilling from './billing/AccountBilling';
import AccountInfo from './info/AccountInfo';
import AccountPassword from './password/AccountPassword';
import AccountDanger from './danger/AccountDanger';
import styled from 'styled-components';

const Account = () => {
	return (
		<Container>
			<StyledDiv>
				<AccountInfo />
				<AccountPassword />
				<AccountBilling />
				<AccountDanger />
			</StyledDiv>
		</Container>
	);
};

export default Account;

const StyledDiv = styled.div`
	section {
		background-color: #fefefe;
		border: 1.25px solid #eeeeee;
		border-radius: 4px;
		box-shadow: 0px 7.5px 15px rgba(0, 0, 0, 0.045);
		padding: 3rem 1.5rem;
		padding-top: 1.5rem;
		min-height: 80px;
		display: flex;
		flex-direction: column;
		margin-bottom: 4rem;

		form {
			padding-top: 2rem;
			border-top: 1px solid #eeeeee;
		}
	}
`;
