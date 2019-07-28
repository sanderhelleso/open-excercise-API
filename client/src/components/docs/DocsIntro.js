import React from 'react';
import styled from 'styled-components';

const DocsIntro = () => (
	<StyledSection>
		<div>
			<h1>Documentation</h1>
			<span>v1</span>
		</div>
		<p>
			The Open Excercise API makes it easy to create sport & fitness applications. With over 900 excercises,
			developed with performance and user experience in mind, you got all the data you need to build the next
			great app. Below you will find detailed documentation of endpoints, request methods and interactive
			examples.
		</p>
	</StyledSection>
);

export default DocsIntro;

const StyledSection = styled.section`
	h1 {
		font-size: 2.25rem;
	}

	div {
		display: flex;
		flex-direction: row;
		align-items: center;

		span {
			margin-left: 1rem;
			padding: 0.35rem;
			background-color: #eeeeee;
			border-radius: 30px;
			min-width: 50px;
			text-align: center;
			font-weight: 100;
			color: #757575;
			margin-bottom: 0.6rem;
		}
	}
`;
