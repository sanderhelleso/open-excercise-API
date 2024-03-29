import React, { useEffect, useState } from 'react';
import Container from '../common/Container';
import Loader, { LoaderCont } from '../common/Loader';
import _fetch from '../../lib/_fetch';
import { withRouter } from 'react-router-dom';
import verifyUrlCode from '../../lib/verifyUrlCode';
import { withToastManager } from 'react-toast-notifications';
import toast from '../../lib/toast';

const VerifyAccount = ({ toastManager, history }) => {
	useEffect(() => {
		verify();
	}, []);

	const verify = async () => {
		const code = verifyUrlCode();

		if (!code) {
			return history.replace('/login');
		}

		try {
			await _fetch(`http://localhost:4000/auth/verify`, 'PATCH', null, { code });
			toast(toastManager, false, 'Account has been succesfully verified! You can now login to your account');
		} catch (error) {
			toast(toastManager, true, error);
		}

		history.replace('/login');
	};

	const render = () => {
		return (
			<LoaderCont loading={true}>
				<span>
					<Loader size={60} color="#139ff2" />
				</span>
				<h1>Verifying Account</h1>
				<p>Hang thight while we verify your account</p>
			</LoaderCont>
		);
	};

	return <Container>{render()}</Container>;
};

export default withRouter(withToastManager(VerifyAccount));
