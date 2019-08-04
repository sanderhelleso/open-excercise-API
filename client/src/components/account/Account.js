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
		padding: 2rem;
		padding-bottom: 3rem;
		min-height: 80px;
		display: flex;
		flex-direction: column;
		margin-bottom: 6rem;
		position: relative;

		h2 {
			margin: 0;
			font-size: 1.75rem;
		}

		form {
			display: flex;
			flex-direction: row;

			.form-section {
				margin-right: 4rem;
			}
		}

		.account-section-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-bottom: 2rem;
			border-bottom: 1px solid #eeeeee;
			margin-bottom: 2rem;
		}
	}
`;
