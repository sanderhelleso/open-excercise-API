import React from 'react';
import PaymentForm from './PaymentForm';
import { Elements, StripeProvider } from 'react-stripe-elements';

const PaymentFormConsumer = () => {
	return (
		<StripeProvider apiKey="pk_test_NMzFrFqqgx4NHGUuJnUhWYCD">
			<Elements>
				<PaymentForm />
			</Elements>
		</StripeProvider>
	);
};

export default PaymentFormConsumer;
