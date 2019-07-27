import React, { Fragment } from 'react';
import styled from 'styled-components';
import { formatDocsLink } from '../../../lib/docsSections';

const DocsNavigatorItem = ({ title, active, showSep }) => {
	return (
		<Fragment>
			<StyledItem active={active}>
				<StyledCircle active={active} />
				<a href={formatDocsLink(title)}>{title}</a>
			</StyledItem>
			{showSep && <StyledSep />}
		</Fragment>
	);
};

export default DocsNavigatorItem;

const StyledItem = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	a {
		color: ${({ active }) => (active ? '#139ff2' : '#9e9e9e')};
		font-weight: ${({ active }) => (active ? '400' : '100')};
		font-size: 13px;
		margin: 0;
		margin-left: 1.5rem;
		margin-top: -2.5px;

		&:hover {
			color: #139ff2;
			opacity: 0.8;
		}
	}
`;

const StyledCircle = styled.div`
	min-width: 8px;
	transition: 0.2s ease;
	min-height: 8px;
	border-radius: 50%;
	border: 2px solid ${({ active }) => (active ? '#139ff2' : '#eeeeee')};
	background-color: ${({ active }) => (active ? '#139ff2' : 'transparent')};
`;

const StyledSep = styled.div`
	min-width: 2px;
	max-width: 2px;
	min-height: 30px;
	background-color: #eeeeee;
	margin-left: 5px;
	margin-bottom: -3px;
	margin-top: -3px;
`;
