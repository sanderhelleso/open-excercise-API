import React from 'react';
import styled from 'styled-components';
import { Code } from 'react-feather';

const DocsEndpointExample = ({ exampleData, resultFor }) => (
	<StyledDiv>
		<StyledHeader>
			<h4>Result for {resultFor ? <span>{resultFor}</span> : 'endpoint'}</h4>
			<h5>
				<Code /> JSON
			</h5>
		</StyledHeader>
		<StyledPre>{exampleData}</StyledPre>
	</StyledDiv>
);

export default DocsEndpointExample;

const StyledDiv = styled.div`
	box-shadow: 0px 7.5px 15px rgba(0, 0, 0, 0.15);
	margin-bottom: 2rem;
	transition: 0.3s ease;
`;

const StyledHeader = styled.div`
	background-color: #151515;
	height: 35px;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
	padding: 0.5rem 1.25rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;

	h4 {
		margin: 0;
		color: #ffffff;
		font-weight: 100;
		font-size: 0.9rem;

		span {
			font-family: 'Oswald', sans-serif;
			font-weight: 400;
		}
	}

	h5 {
		color: #757575;
		display: flex;
		align-items: center;
		font-size: 0.9rem;
		margin: 0;

		svg {
			height: 1.2rem;
			width: 1.2rem;
			opacity: 0.75;
			margin-right: 0.5rem;
			margin-top: 2px;
		}
	}
`;

const StyledPre = styled.pre`
	background-color: #1d1d1d;
	word-break: break-all;
	color: #f7f7f7;
	padding: 2rem;
	margin: 0;
	max-height: 300px;
	overflow-y: auto;
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;

	&::-webkit-scrollbar {
		width: 0em;
	}
`;
