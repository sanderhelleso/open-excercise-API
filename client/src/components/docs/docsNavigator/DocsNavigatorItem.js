import React, { Fragment } from 'react';
import styled from 'styled-components';
import { formatDocsLink } from '../../../lib/docsSections';

const DocsNavigatorItem = ({ title, showSep }) => {
	return (
		<Fragment>
			<StyledItem>
				<StyledCircle />
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
		color: #9e9e9e;
		font-size: 13px;
		margin: 0;
		margin-left: 1.5rem;
		margin-top: -2.5px;
	}
`;

const StyledCircle = styled.div`
	min-width: 8px;
	min-height: 8px;
	border-radius: 50%;
	border: 2px solid #e0e0e0;
`;

const StyledSep = styled.div`
	min-width: 2px;
	max-width: 2px;
	min-height: 30px;
	background-color: #e0e0e0;
	margin-left: 5px;
	margin-bottom: -4.5px;
	margin-top: -4.5px;
`;
