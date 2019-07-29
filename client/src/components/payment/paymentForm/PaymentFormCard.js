import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const PaymentCard = () => {
	const input = {
		number: 52,
		name: 'Sander',
		expiry: 5,
		cvc: 261,
		focused: false
	};

	return (
		<Cards number={input.number} name={input.name} expiry={input.expiry} cvc={input.cvc} focused={input.focused} />
	);
};

export default PaymentCard;
