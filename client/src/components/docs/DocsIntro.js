import React from 'react';
import styled from 'styled-components';

const DocsIntro = () => (
	<StyledSection>
		<h1>Documentation</h1>
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
`;
