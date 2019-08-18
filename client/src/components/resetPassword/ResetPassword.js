import React, { useEffect, useState } from 'react';
import Container from '../common/Container';
import Loader, { LoaderCont } from '../common/Loader';
import _fetch from '../../lib/_fetch';
import { withRouter } from 'react-router-dom';
import verifyUrlCode from '../../lib/verifyUrlCode';
import toast from '../../lib/toast';
import { withToastManager } from 'react-toast-notifications';

const ResetPassword = ({ toastManager, history }) => {
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		verify();
	}, []);

	const verify = async () => {
		const code = verifyUrlCode();

		if (!code) {
			history.replace('/login');
		}

		try {
			await _fetch(`http://localhost:4000/auth/verify-reset-password`, 'POST', null, { code });
		} catch (error) {
			toast(toastManager, true, error);
			history.replace('/login');
		}
	};

	const render = () => {
		return (
			<LoaderCont loading={loading}>
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
