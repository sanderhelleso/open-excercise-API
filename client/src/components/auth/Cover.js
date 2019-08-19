import React from 'react';
import styled from 'styled-components';
import { ArrowLeft } from 'react-feather';
import { withRouter } from 'react-router';

const Cover = ({ history }) => {
	return (
		<StyledCover>
			<ArrowLeft onClick={() => history.push('/')} tabIndex="0" />
			<h1>Open Excercise API</h1>
		</StyledCover>
	);
};

export default withRouter(Cover);

const StyledCover = styled.aside`
	min-width: 50%;
	max-width: 50%;
	min-height: 100vh;
	background: linear-gradient(rgba(19, 159, 242, 0.5), rgba(196, 68, 255, 0.7)),
		url(${process.env.PUBLIC_URL}${'/img/cover.jpg'});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	display: flex;
	justify-content: center;
	align-items: center;

	h1 {
		font-size: 3.5rem;
		color: #ffffff;
		max-width: 600px;
	}

	svg {
		stroke: #ffffff;
		height: 4rem;
		width: 4rem;
		margin: 3rem;
		cursor: pointer;
		position: absolute;
		top: 0;
		left: 0;
	}

	@media screen and (min-width: 2200px) {
		min-width: 70%;
		max-width: 70%;
	}

	@media screen and (max-width: 1000px) {
		display: none;
	}
`;
