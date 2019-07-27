import React from 'react';
import styled from 'styled-components';
import { Hash } from 'react-feather';

const formatLink = (str) => {
	str = str.toLowerCase();
	const splitted = str.split(' ');
	if (splitted.length) {
		return splitted.join('-');
	}

	return str;
};

const DocsHeading = ({ title, active }) => (
	<StyledHeading active={active}>
		<a href={`#${formatLink(title)}`}>{title}</a>
		<Hash />
	</StyledHeading>
);

export default DocsHeading;

const StyledHeading = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	cursor: pointer;
	margin-bottom: 1rem;

	&:hover {
		svg {
			stroke: #139ff2;
		}
	}

	a {
		margin: 0;
		font-size: 1.25rem;
		margin-right: 0.5rem;
	}

	svg {
		height: 1.3rem;
		width: 1.3rem;
		margin-bottom: -3px;
		stroke: ${({ active }) => (active ? '#139ff2' : '#e0e0e0')};
		transition: 0.3s ease;
	}
`;
