import React, { useState } from 'react';
import styled from 'styled-components';
import { RefreshCcw } from 'react-feather';
import setApiKeyAction from '../../../actions/setApiKeyAction';
import { connect } from 'react-redux';
import _fetch from '../../../lib/_fetch';

const ApiKeyUpdateBtn = ({ setApiKeyAction }) => {
	const [ loading, setLoading ] = useState(false);

	_fetch();

	const generateApiKey = async () => {
		if (loading) return;

		setLoading(true);

		try {
			const data = await _fetch('http://localhost:4000/quotas/new-key');
			const api_key = await data.text();

			setApiKeyAction(api_key);
		} catch (error) {
			console.log(error);
		}

		setLoading(false);
	};

	return (
		<StyledBtn loading={loading} onClick={generateApiKey} title="Generate new">
			<RefreshCcw />
		</StyledBtn>
	);
};

const actions = {
	setApiKeyAction
};

export default connect(null, actions)(ApiKeyUpdateBtn);

const StyledBtn = styled.button`
	padding: 1.15rem;
	border: none;
	outline: none;
	text-transform: uppercase;
	letter-spacing: 1.25px;
	border-radius: 4px;
	font-weight: 400;
	transition: 0.3s ease-in-out;
	font-family: 'Poppins', sans-serif;
	transform: scale(1.001);
	position: relative;
	line-height: 2rem;
	background-color: #12e2a3;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 12px 30px 0px rgba(0, 226, 163, 0.5);
	position: absolute;
	right: -0.25rem;

	cursor: ${({ loading }) => (loading ? 'not-allowed' : 'pointer')};
	opacity: ${({ loading }) => (loading ? '0.4' : '1')};

	svg {
		stroke: #ffffff;
		opacity: 0.8;
		height: 1.2rem;
		width: 1.2rem;
	}
`;
