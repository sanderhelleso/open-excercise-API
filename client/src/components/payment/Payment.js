import React from 'react';
import Container from '../common/Container';
import PaymentFormConsumer from './paymentForm/PaymentFormConsumer';
import Plans from '../plans/Plans';

const Payment = () => {
	return (
		<Container>
			<Plans />
			<PaymentFormConsumer />
		</Container>
	);
};

export default Payment;
