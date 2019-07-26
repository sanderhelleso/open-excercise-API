import React from 'react';
import styled from 'styled-components';

const AnalyticsIcon = ({ icon }) => <StyledIcon>{icon}</StyledIcon>;

export default AnalyticsIcon;

const StyledIcon = styled.div`
	border: 1px solid #139ff2;
	min-width: 45px;
	min-height: 45px;
	max-width: 45px;
	max-height: 45px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 1rem;
	margin-top: 0.8rem;

	svg {
		height: 0.9rem;
		width: 0.9rem;
		stroke: #139ff2;
	}
`;
