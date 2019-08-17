import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<StyledFooter>
			<h5>Developed with ❤️ and 🏋️ from Norway</h5>
			<p>Copyright Semanta</p>
		</StyledFooter>
	);
};

export default Footer;

const StyledFooter = styled.footer`
	padding-top: 4rem;
	min-height: 100px;
	max-height: 100px;
	display: flex;
	margin: 2rem auto;
	justify-content: center;
	flex-direction: column;
	align-items: center;

	h5 {
		font-size: 1.05rem;
		margin-bottom: 2rem;
	}
`;
