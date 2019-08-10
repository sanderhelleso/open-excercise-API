import React, { useEffect, useState } from 'react';
import Container from '../common/Container';
import Loader, { LoaderCont } from '../common/Loader';
import _fetch from '../../lib/_fetch';
import { withRouter } from 'react-router-dom';

const VerifyAccount = ({ history }) => {
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState('');

	useEffect(() => {
		verify();
	}, []);

	const verify = async () => {
		const urlParams = new URLSearchParams(window.location.search);
		const code = urlParams.get('code');

		if (!code) {
			setLoading(false);
			setError('Verification code is missing. Please follow the instructions sent to your registered email.');
			return;
		}

		try {
			await _fetch(`http://localhost:4000/auth/verify`, 'PATCH', null, { code });
			history.replace('/login');
		} catch (error) {
			alert(error);
		}
	};

	const render = () => {
		if (error) {
			return <p>{error}</p>;
		}

		return (
			<LoaderCont loading={loading}>
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

export default withRouter(VerifyAccount);
