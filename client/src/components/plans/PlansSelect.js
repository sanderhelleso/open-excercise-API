import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { connect } from 'react-redux';
import setSelectedPlanAction from '../../actions/setSelectedPlanAction';
import { getAvailavblePlanOptions } from '../../lib/planOptions';

const PlansSelect = ({ selectedOptionIndex, options, setSelectedPlanAction }) => {
	const handleChange = ({ value }) => {
		setSelectedPlanAction(value);
		const ele = document.querySelector('#payment-form');

		ele.querySelector('input').focus();
		ele.scrollIntoView();
	};

	return (
		<StyledSelect
			defaultValue={options.find(({ disabled }) => !disabled)}
			options={options}
			isOptionDisabled={({ disabled }) => disabled}
			onChange={handleChange}
		/>
	);
};

const mapStateToProps = ({ plans: { selectedOptionIndex }, subscription: { planID } }) => {
	const options = getAvailavblePlanOptions(planID || 'individual');
	return { selectedOptionIndex, options };
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
