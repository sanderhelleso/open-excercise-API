import React, { useEffect, useState } from 'react';

const VerifyAccount = () => {
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState('');

	useEffect(() => {
		verify();
	}, []);

	const verify = async () => {
		const urlParams = new URLSearchParams(window.location.search);
		const verifyCode = urlParams.get('code');

		if (!verifyCode) {
			setLoading(false);
			setError('Verification code is missing. Please follow the instructions sent to your registered email.');
			return;
		}

		console.log(verifyCode);
	};

	return (
		<div>
			<h1>Verifying...</h1>
			{error && <p>{error}</p>}
		</div>
	);
};

export default VerifyAccount;
