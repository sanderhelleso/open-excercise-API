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
			padding-top: 2rem;
			border-top: 1px solid #eeeeee;
			margin-top: 2rem;
		}

		.account-section-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		button {
			cursor: pointer;
			padding: 0.75rem 2rem;
			border: none;
			outline: none;
			text-transform: uppercase;
			letter-spacing: 1px;
			border-radius: 4px;
			font-weight: 400;
			transition: 0.3s ease-in-out;
			color: #ffffff;
			box-shadow: 0px 12px 30px 0px rgba(19, 159, 242, 0.5);
			background-color: #139ff2;
			max-width: 125px;
		}
	}
`;
