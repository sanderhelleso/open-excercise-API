import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const options = [
	{
		name: 'Home',
		path: '/'
	},
	{
		name: 'Plans',
		path: '/plans'
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
		return options.map(({ name, path }, i) => {
			return (
				<StyledLi
					key={`navbar-option-${i}`}
					id={name === 'Register' ? 'register-btn' : null}
					className={path === activePath ? 'active' : null}
					onClick={() => history.push(path)}
				>
					{name}
				</StyledLi>
			);
		});
	};
	return (
		<StyledNav>
			<StyledContainer>
				<p onClick={() => history.push('/')}>Open Excercise API</p>
				<StyledUl>{renderOptions()}</StyledUl>
			</StyledContainer>
		</StyledNav>
	);
};

export default withRouter(Navbar);

const StyledNav = styled.nav`
	position: fixed;
	top: 0;
	width: 100vw;
	z-index: 100;
	background-color: #ffffff;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
	padding: 15px 0;
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
	letter-spacing: 1px;

	&#register-btn {
		background: #56ccf2; /* fallback for old browsers */
		background: -webkit-linear-gradient(to left, #2f80ed, #56ccf2); /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(
			to left,
			#2f80ed,
			#56ccf2
		); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

		color: #ffffff;
		border-radius: 30px;
		text-transform: uppercase;
	}

	&.active {
		color: #139ff2;
	}
`;
