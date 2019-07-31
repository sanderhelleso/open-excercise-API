import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' }
];

const PaymentFormSelectPlan = () => <StyledSelect options={options} />;

export default PaymentFormSelectPlan;

const StyledSelect = styled(Select)`
    min-width: 250px;
    margin-right: 2rem;
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
`;
