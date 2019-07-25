import React, { useState } from 'react';
import styled from 'styled-components';
import ApiKeyUpdateBtn from './ApiKeyUpdateBtn';
import ApiKeyBtns from './ApiKeyBtns';

const ApiKeyField = () => {
	const [ blur, setBlur ] = useState(true);

	return (
		<StyledDiv blur={blur}>
			<span>a1954334128f525582e4280f006321708475b17d75aeeddc67db5f09a98b1546</span>
			<ApiKeyUpdateBtn />
		</StyledDiv>
	);
};

export default ApiKeyField;

const StyledDiv = styled.div`
	padding: 12.5px 12.5px;
	padding-right: 2.5rem;
	background-color: #fefefe;
	height: 50px;
	border-radius: 100px;
	display: flex;
	align-items: center;
	position: relative;
	margin-right: 1rem;
	border: 1.25px solid #eeeeee;

	span {
		font-weight: 400;
		margin-right: 2rem;
		filter: ${({ blur }) => (blur ? 'blur(3px)' : 'blur(0)')};
	}
`;
