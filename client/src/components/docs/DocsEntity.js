import React from 'react';
import styled from 'styled-components';

const DocsEntity = ({ attributes }) => {
	const renderEntities = () => {
		return Object.entries(attributes).map(([ k, v ]) => {
			return (
				<StyledDiv>
					<span>{k}</span>
					<p>{v}</p>
				</StyledDiv>
			);
		});
	};

	return <StyledCont title="Entity attributes">{renderEntities()}</StyledCont>;
};

export default DocsEntity;

const StyledCont = styled.div`
	margin-top: 1rem;
	margin-bottom: 0;
	padding: 1rem;
	background-color: #eeeeee;
	border-radius: 6px;
`;

const StyledDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 0.25rem;

	span {
		margin-right: 0.5rem;
		font-weight: 400;
	}
`;
