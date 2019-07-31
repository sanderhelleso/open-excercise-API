import React from 'react';
import styled from 'styled-components';
import PlanOption from './PlanOption';
import { connect } from 'react-redux';

const PlanOptions = ({ optionsData, selectedOptionIndex }) => {
	const renderOptions = () => {
		return optionsData.map((option, i) => {
			return <PlanOption {...option} i={i} selected={i === selectedOptionIndex} />;
		});
	};

	return <StyledCont>{renderOptions()}</StyledCont>;
};

const mapStateToProps = ({ plans: { optionsData } }) => ({ optionsData });
export default connect(mapStateToProps, null)(PlanOptions);

const StyledCont = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 3.5rem 0;
`;
