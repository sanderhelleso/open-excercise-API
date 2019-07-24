import React, { useState } from 'react';
import styled from 'styled-components';

const ApiKeyField = () => {
	const [ blur, setBlur ] = useState(true);

	return (
		<StyledDiv blur={blur}>
			<span>a1954334128f525582e4280f006321708475b17d75aeeddc67db5f09a98b1546</span>
		</StyledDiv>
	);
};

export default ApiKeyField;

const StyledDiv = styled.div`
	padding: 5px 20px;
	margin-top: 10px;
	border-radius: 6px;
	background-color: #eeeeee;
	height: 50px;
	display: flex;
	align-items: center;
	border: 1px solid #e0e0e0;
	position: relative;

	span {
		font-weight: 400;
		filter: ${({ blur }) => (blur ? 'blur(3px)' : 'blur(0)')};
	}
`;
