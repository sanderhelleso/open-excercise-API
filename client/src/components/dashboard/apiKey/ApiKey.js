import React, { useState } from 'react';
import styled from 'styled-components';
import ApiKeyUpdateBtn from './ApiKeyUpdateBtn';

const ApiKey = () => {
	const [ blur, setBlur ] = useState(true);

	return (
		<StyledCont>
			<h5>My API key</h5>

			<StyledDiv blur={blur}>
				<span>a1954334128f525582e4280f006321708475b17d75aeeddc67db5f09a98b1546</span>
				<ApiKeyUpdateBtn />
			</StyledDiv>
		</StyledCont>
	);
};

export default ApiKey;

const StyledCont = styled.div`
	margin-top: 2rem;

	h5 {
		font-size: 1rem;
		margin-bottom: 1.5rem;
	}
`;

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
