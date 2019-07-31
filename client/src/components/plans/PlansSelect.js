import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { connect } from 'react-redux';
import setSelectedPlanAction from '../../actions/setSelectedPlanAction';

const PlansSelect = ({ options, selectedOptionIndex, setSelectedPlanAction }) => {
	const handleChange = ({ value }) => {
		setSelectedPlanAction(value);
		const ele = document.querySelector('#payment-form').querySelector('input');
		ele.focus();
		ele.scrollIntoView();
	};

	return <StyledSelect defaultValue={options[selectedOptionIndex]} options={options} onChange={handleChange} />;
};

const mapStateToProps = ({ plans: { options, selectedOptionIndex } }) => {
	return { options, selectedOptionIndex };
};

const actions = {
	setSelectedPlanAction
};

export default connect(mapStateToProps, actions)(PlansSelect);

const StyledSelect = styled(Select)`
    min-width: 350px;
	max-width: 350px;
	background-color: #ffffff;
	margin: 3rem auto;
	margin-bottom: 5rem;
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
	text-align: left;
`;
