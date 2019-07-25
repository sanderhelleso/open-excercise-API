import React from 'react';
import styled from 'styled-components';

const AnalyticsCard = ({ data, desc, icon }) => {
	return (
		<StyledDiv>
			<StyledInfo>
				{icon}
				<div>
					<StyledHeding>{data}</StyledHeding>
					<p>{desc}</p>
				</div>
			</StyledInfo>
		</StyledDiv>
	);
};

export default AnalyticsCard;

const StyledDiv = styled.div`
	background-color: #fefefe;
	border: 1.25px solid #eeeeee;
	border-radius: 4px;
	box-shadow: 0px 7.5px 15px rgba(0, 0, 0, 0.045);
	padding: 1.5rem;
	padding-top: 0.5rem;
	display: flex;
	flex-direction: column;

	p {
		font-size: 12px;
	}
`;

const StyledInfo = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const StyledHeding = styled.h5`
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: 1.7rem;
	font-weight: 400;
	margin-bottom: 0.2rem;
	margin-top: 1rem;
`;
