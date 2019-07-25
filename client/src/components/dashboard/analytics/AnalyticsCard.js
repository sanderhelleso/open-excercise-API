import React from 'react';
import styled from 'styled-components';

const AnalyticsCard = ({ title, desc, icon }) => {
	return (
		<StyledDiv>
			<StyledInfo>
				{icon}
				<div>
					<StyledHeding>{title}</StyledHeding>
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
	min-height: 200px;
	box-shadow: 0px 7.5px 15px rgba(0, 0, 0, 0.045);
	padding: 2rem;
`;

const StyledInfo = styled.div`
	display: flex;
	flex-direction: row;
`;

const StyledHeding = styled.h5`
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: 1rem;
	font-weight: 400;
	margin-bottom: 0.5rem;
`;
