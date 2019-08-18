import React from 'react';
import styled from 'styled-components';
import { isEmail } from '../../lib/validators';
import toast from '../../lib/toast';
import _fetch from '../../lib/_fetch';

const ForgotPassword = ({ toastManager, email }) => {
	const sendResetEmail = () => {
		if (!email || !isEmail(email)) {
			toast(toastManager, true, 'Please enter a valid email address');
			return document.querySelector('input[type=email]').focus();
		}

		_fetch(`http://localhost:4000/auth/reset-password`, 'POST', null, { email });
		toast(toastManager, false, `Instructions on how to reset your password has been sent to ${email}`);
	};

	return <StyledH5 onClick={sendResetEmail}>Forgot password?</StyledH5>;
};

export default ForgotPassword;

const StyledH5 = styled.h5`
	color: #9e9e9e;
	margin-top: 4rem;
	cursor: pointer;
	text-align: center;
	font-weight: 100;
	font-size: 0.8rem;
	font-family: 'Open Sans', sans-serif;
`;
