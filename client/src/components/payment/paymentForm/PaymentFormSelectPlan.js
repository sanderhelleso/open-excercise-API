import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { connect } from 'react-redux';
import setSelectedPlanAction from '../../../actions/setSelectedPlanAction';

const PaymentFormSelectPlan = ({ options, setSelectedPlanAction }) => {
	return <StyledSelect options={options} />;
};

const mapStateToProps = ({ plans: { options } }) => {
	return { options };
};

const actions = {
	setSelectedPlanAction
};

export default connect(mapStateToProps, actions)(PaymentFormSelectPlan);

const StyledSelect = styled(Select)`
    min-width: 250px;
    margin-right: 2rem;
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
`;
