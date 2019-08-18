import React, { useState } from 'react';
import styled from 'styled-components';
import ApiKeyUpdateBtn from './ApiKeyUpdateBtn';
import { connect } from 'react-redux';

const ApiKey = ({ name, api_key }) => {
	const [ blur, setBlur ] = useState(true);

	return (
		<StyledCont>
			<StyledHeader>
				<h3>API key</h3>
				<StyledSep />
				<StyledBtn onClick={() => setBlur(!blur)}>{blur ? 'See' : 'Hide'}</StyledBtn>
			</StyledHeader>
			<p>
				Your API key is required to use our API. Please keep it private and store it in a safe place. You can at
				anytime replace your current key with a new one.
			</p>
			<StyledDiv blur={blur}>
				<span>{api_key}</span>
				<ApiKeyUpdateBtn />
			</StyledDiv>
		</StyledCont>
	);
};

const mapStateToProps = ({ auth: { name }, quota: { api_key } }) => {
	const _name = name.split(' ');

	return { name: _name.length ? _name[0] : name, api_key };
};

export default connect(mapStateToProps, null)(ApiKey);

const StyledHeader = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding-top: 60px;

	h3 {
		font-size: 1.25rem;
		margin: 0;
	}
`;

const StyledSep = styled.div`
	min-width: 30px;
	min-height: 1px;
	margin: 0 1rem;
	background-color: #9e9e9e;
	opacity: 0.3;
`;

const StyledCont = styled.div`
	p {
		max-width: 500px;
		margin: 1.2rem 0;
	}
`;

const StyledDiv = styled.div`
	margin-top: 2rem;
	padding: 0 12.5px;
	padding-right: 2.5rem;
	background-color: #fefefe;
	height: 50px;
	border-radius: 4px;
	display: flex;
	align-items: center;
	position: relative;
	margin-right: 1rem;
	border: 1.25px solid #eeeeee;
	min-width: 560px;
	max-width: 560px;

	span {
		font-weight: 100;
		margin-right: 2rem;
		font-size: 14px;
		filter: ${({ blur }) => (blur ? 'blur(3px)' : 'blur(0)')};
	}
`;

const StyledBtn = styled.button`
	border: none;
	cursor: pointer;
	outline: none;
	background-color: #eeeeee;
	padding: 5px 20px;
	border-radius: 30px;
	min-width: 70px;
`;
