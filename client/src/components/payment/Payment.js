import React from 'react';
import Container from '../common/Container';
import PaymentForm from './paymentForm/PaymentForm';
import Plans from '../plans/Plans';

const Payment = () => {
	return (
		<Container>
			<Plans />
			<PaymentForm />
		</Container>
	);
};

export default Payment;
