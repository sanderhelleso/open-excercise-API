import React, { useState, Fragment } from 'react';
import { isPassword } from '../../lib/validators';
import { ArrowRight, X } from 'react-feather';
import ButtonV2 from '../common/ButtonV2';
import InputV2 from '../common/InputV2';
import toast from '../../lib/toast';
import styled from 'styled-components';

const field = {
	placeholder: 'Enter your new password',
	type: 'password',
	name: 'password',
	label: {
		text: 'New Password',
		htmlForm: 'password'
	}
};

const ResetPasswordForm = ({ history, toastManager }) => {
	const [ loading, setLoading ] = useState(false);
	const [ password, setPassword ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			toast(toastManager, false, 'Password has been successfully updated! You can now login to your account');
			history.replace('/login');
		} catch (error) {
			toast(toastManager, true, error);
			setTimeout(() => {
				setLoading(false);
			}, 500);
		}
	};

	const setText = () => {
		return loading ? 'Updating...' : 'Update password';
	};

	return (
		<Fragment>
			<StyledArrow onClick={() => history.replace('/login')}>
				<X />
			</StyledArrow>
			<StyledCont>
				<form onSubmit={handleSubmit}>
					<InputV2 {...field} onChange={({ target: { value } }) => setPassword(value)} />
					<ButtonV2 text={setText()} icon={<ArrowRight />} disabled={loading || !isPassword(password)} />
				</form>
			</StyledCont>
		</Fragment>
	);
};

export default ResetPasswordForm;

const StyledCont = styled.div`
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%);

	input {
		min-width: 280px;
	}

	button {
		margin-top: 2rem;
		min-width: 300px;
		min-height: 60px;
	}
`;

const StyledArrow = styled.span`
	cursor: pointer;
	position: absolute;
	top: 3rem;
	left: 4rem;

	svg {
		stroke: #9e9e9e;
		opacity: 0.7;
		height: 4rem;
		width: 4rem;
	}
`;
