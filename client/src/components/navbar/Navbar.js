import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const options = [
	{
		name: 'Home',
		path: '/'
	},
	{
		name: 'Documentation',
		path: '/documentation'
	},
	{
		name: 'Login',
		path: '/login'
	},
	{
		name: 'Register',
		path: '/register'
	}
];

const Navbar = ({ history, match }) => {
	const activePath = match.url;

	const renderOptions = () => {
		return options.map((option, i) => {
			return (
				<StyledLi
					key={`navbar-option-${i}`}
					className={option.path === activePath ? 'active' : null}
					onClick={() => history.push(`${option.path}`)}
				>
					{option.name}
				</StyledLi>
			);
		});
	};
	return (
		<StyledNav>
			<StyledContainer>
				<p>Open Excercise API</p>
				<StyledUl>{renderOptions()}</StyledUl>
			</StyledContainer>
		</StyledNav>
	);
};

export default withRouter(Navbar);

const StyledNav = styled.nav`
	position: fixed;
	width: 100vw;
	z-index: 100;
	background-color: #ffffff;
	box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
	padding: 10px 0;
`;

const StyledContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 85%;
	margin: 0 auto;
	max-width: 1200px;
`;

const StyledUl = styled.ul`
	font-family: "Open Sans", "sans-serif";
	font-size: 0.8rem;
	list-style: none;
	display: flex;
	margin: 0;
`;

const StyledLi = styled.li`
	margin: 0;
	padding: 0.5rem 2rem;
	cursor: pointer;
	font-weight: 400;
	transition: 0.3s ease-in-out;

	&.active {
		color: #139ff2;
	}
`;
