import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

const defoptions = [
	{
		name: 'Plans',
		path: '/plans'
	},
	{
		name: 'Documentation',
		path: '/documentation'
	}
];

const nonAuthedOptions = [
	{
		name: 'Login',
		path: '/login'
	},
	{
		name: 'Register',
		path: '/register'
	}
];

const authedOptions = [
	{
		name: 'Account',
		path: '/account'
	}
];

const Navbar = ({ isAuthenticated, history, match }) => {
	const makeOptions = () => {
		const authOptions = isAuthenticated ? authedOptions : nonAuthedOptions;
		return [
			{
				name: isAuthenticated ? 'Dashboard' : 'Home',
				path: '/'
			},
			...defoptions,
			...authOptions
		];
	};

	const renderOptions = () => {
		return makeOptions().map(({ name, path }, i) => {
			return (
				<StyledLi
					key={`navbar-option-${i}`}
					id={name === 'Register' ? 'register-btn' : null}
					className={path === match.url ? 'active' : null}
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

const mapStateToProps = ({ auth: { isAuthenticated } }) => {
	return { isAuthenticated };
};

export default connect(mapStateToProps, null)(withRouter(Navbar));

const StyledNav = styled.nav`
	position: fixed;
	top: 0;
	width: 100vw;
	z-index: 100;
	background-color: #ffffff;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
	padding: 15px 0;

	@media screen and (max-width: 1000px) {
		min-height: 100vh;
		background-color: rgba(255, 255, 255, 0.975);

		p {
			display: none;
		}
	}
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
	z-index: 10;

	@media screen and (max-width: 1000px) {
		flex-direction: column;
		align-items: center;
		position: absolute;
		top: 27.5%;
		left: 50%;
		transform: translate(-50%);
		padding: 0;
	}
`;

const StyledLi = styled.li`
	margin: 0;
	padding: 0.5rem 2rem;
	cursor: pointer;
	font-weight: 400;
	transition: 0.3s ease-in-out;
	letter-spacing: 1px;
	color: #444444;

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

	@media screen and (max-width: 1000px) {
		font-size: 1.5rem;
		margin-bottom: 2rem;
		text-transform: uppercase;
		font-weight: 100;

		&#register-btn {
			padding: 1rem 4rem;
			margin-top: 4rem;
		}
	}

	@media screen and (max-width: 500px) {
		font-size: 1.2rem;
	}
`;
