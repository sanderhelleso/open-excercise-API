import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { connect } from 'react-redux';
import setSelectedPlanAction from '../../../actions/setSelectedPlanAction';

const PaymentFormSelectPlan = ({ options, selectedOptionIndex, setSelectedPlanAction }) => {
	const handleChange = ({ value }) => {
		setSelectedPlanAction(value);
	};

	return <StyledSelect defaultValue={options[selectedOptionIndex]} options={options} onChange={handleChange} />;
};

const mapStateToProps = ({ plans: { options, selectedOptionIndex } }) => {
	return { options, selectedOptionIndex };
};

const actions = {
	setSelectedPlanAction
};

export default connect(mapStateToProps, actions)(PaymentFormSelectPlan);

const StyledSelect = styled(Select)`
    min-width: 250px;
    margin-right: 1rem;
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    outline: none;
`;
