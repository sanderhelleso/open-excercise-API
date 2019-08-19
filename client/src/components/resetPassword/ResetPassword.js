import React, { useEffect, useState } from 'react';
import Container from '../common/Container';
import Loader, { LoaderCont } from '../common/Loader';
import _fetch from '../../lib/_fetch';
import { withRouter } from 'react-router-dom';
import verifyUrlCode from '../../lib/verifyUrlCode';
import toast from '../../lib/toast';
import { withToastManager } from 'react-toast-notifications';
import ResetPasswordForm from './ResetPasswordForm';

const ResetPassword = ({ toastManager, history }) => {
	const [ validCode, setValidCode ] = useState();
	const code = verifyUrlCode();

	useEffect(() => {
		verify();
	}, []);

	const verify = async () => {
		if (!code) {
			return history.replace('/login');
		}

		try {
			await _fetch(`http://localhost:4000/auth/verify-reset-password`, 'POST', null, { code });
			setValidCode(true);
		} catch (error) {
			toast(toastManager, true, error);
			history.replace('/login');
		}
	};

	const render = () => {
		if (validCode) {
			return <ResetPasswordForm code={code} history={history} toastManager={toastManager} />;
		}

		return (
			<LoaderCont loading={true}>
				<span>
					<Loader size={60} color="#139ff2" />
				</span>
				<h1>Verifying Reset Code</h1>
				<p>Hang thight while we verify the provided code</p>
			</LoaderCont>
		);
	};

	return <Container>{render()}</Container>;
};

export default withRouter(withToastManager(ResetPassword));
