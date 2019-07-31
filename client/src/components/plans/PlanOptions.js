import React from 'react';
import styled from 'styled-components';
import PlanOption from './PlanOption';
import { connect } from 'react-redux';

const PlanOptions = ({ options, selectedOptionIndex }) => {
	const renderOptions = () => {
		return options.map((option, i) => {
			return <PlanOption {...option} i={i} selected={i === selectedOptionIndex} />;
		});
	};

	return <StyledCont>{renderOptions()}</StyledCont>;
};

const mapStateToProps = ({ plans }) => {
	const { options, selectedOptionIndex } = plans;
	return { options, selectedOptionIndex };
};

export default connect(mapStateToProps, null)(PlanOptions);

const StyledCont = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 3.5rem 0;
`;
