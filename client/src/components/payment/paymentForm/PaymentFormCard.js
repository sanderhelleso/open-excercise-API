import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const PaymentCard = ({ number, name, expiry, cvc, focused }) => {
	return <Cards number={number} name={name} expiry={expiry} cvc={cvc} focused={focused} />;
};

export default PaymentCard;
