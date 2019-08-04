import React from 'react';
import Container from '../common/Container';
import AccountBilling from './billing/AccountBilling';
import AccountInfo from './info/AccountInfo';
import AccountPassword from './password/AccountPassword';
import AccountDanger from './danger/AccountDanger';

const Account = () => {
	return (
		<Container>
			<AccountInfo />
			<AccountPassword />
			<AccountBilling />
			<AccountDanger />
		</Container>
	);
};

export default Account;
