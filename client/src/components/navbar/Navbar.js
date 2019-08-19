import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Menu, X } from 'react-feather';
import { fadeInPure } from '../../lib/keyframes';
import ButtonV2 from '../common/ButtonV2';

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
	const [ active, setActive ] = useState(false);

	const makeOptions = () => {
		return [
			{
				name: isAuthenticated ? 'Dashboard' : 'Home',
				path: '/'
			},
			...defoptions
		];
	};

	const makeAuthOptions = () => {
		const authOptions = isAuthenticated ? authedOptions : nonAuthedOptions;

		return authOptions.map(({ name, path }, i) => {
			return (
				<ButtonV2
					text={name}
					onClick={() => history.push(path)}
					flat={name === 'Login'}
					key={`navbar-option-btn-${i}`}
				/>
			);
		});
	};

	const goTo = (path) => {
		history.push(path);
		setActive(false);
	};

	const renderOptions = () => {
		return [
			...makeOptions().map(({ name, path }, i) => {
				return (
					<StyledLi
						key={`navbar-option-${i}`}
						className={path === match.url ? 'active' : null}
						onClick={() => goTo(path)}
					>
						{name}
					</StyledLi>
				);
			}),
			<StyledSep />,
			...makeAuthOptions()
		];
	};

	const renderMenu = () => {
		if (!active) return null;

		return (
			<StyledWrapper active={active}>
				<StyledBG onClick={() => setActive(false)} />
				<StyledNav>
					<StyledUl>{renderOptions()}</StyledUl>
				</StyledNav>
			</StyledWrapper>
		);
	};

	return (
		<Fragment>
			<StyledTrigger onClick={() => setActive(!active)} tabIndex="0" active={active}>
				{active ? <X /> : <Menu />}
			</StyledTrigger>
			{renderMenu()}
		</Fragment>
	);
};

const mapStateToProps = ({ auth: { isAuthenticated } }) => {
	return { isAuthenticated };
};

export default connect(mapStateToProps, null)(withRouter(Navbar));

const StyledNav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 100;
	background-color: #ffffff;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
	padding: 15px 0;
	transition: 0.3s ease;
	min-height: 100vh;
	max-width: 350px;
	background-color: rgba(255, 255, 255, 0.95);
	animation: ${fadeInPure} 0.4s ease forwards;
	overflow-y: auto;
`;

const StyledWrapper = styled.div`display: ${({ active }) => (active ? 'block' : 'none')};`;

const StyledUl = styled.ul`
	font-family: "Open Sans", "sans-serif";
	list-style: none;
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 25%;
	left: 50%;
	transform: translate(-50%);
	padding: 0;

	button {
		min-width: 230px;
		min-height: 55px;
		margin-bottom: 2rem;
	}
`;

const StyledLi = styled.li`
	margin: 0.8rem 0;
	cursor: pointer;
	transition: 0.3s ease-in-out;
	letter-spacing: 1px;
	color: #444444;
	font-size: 1.1rem;
	margin-bottom: 2rem;
	text-transform: uppercase;
	font-weight: 100;

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
		padding: 1rem 3rem;
		margin-top: 4rem;
	}

	&.active {
		color: #139ff2;
	}

	@media screen and (max-width: 500px) {
		font-size: 1.2rem;
	}
`;

const StyledBG = styled.div`
	min-width: 100vw;
	min-height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(20, 20, 20, 0.8);
	z-index: 99;
	animation: ${fadeInPure} 0.4s ease forwards;
`;

const StyledTrigger = styled.button`
	position: ${({ active }) => (active ? 'fixed' : 'absolute')};
	top: 3rem;
	left: 3rem;
	cursor: pointer;
	z-index: 101;
	outline: none;
	background-color: transparent;
	border: none;

	@media screen and (min-width: 1550px) {
		position: fixed;
	}

	svg {
		width: 3rem;
		height: 3rem;
		stroke: #444444;
	}
`;

const StyledSep = styled.span`
	min-width: 100%;
	min-height: 1px;
	background-color: #e0e0e0;
	margin-bottom: 4rem;
	margin-top: 2rem;
`;
