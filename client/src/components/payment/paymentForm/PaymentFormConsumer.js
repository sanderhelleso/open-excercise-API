import React from 'react';
import PaymentForm from './PaymentForm';
import { Elements, StripeProvider } from 'react-stripe-elements';

const PaymentFormConsumer = () => {
	return (
		<StripeProvider apiKey={`${process.env.REACT_APP_STRIPE_PK_TEST}`}>
			<Elements>
				<PaymentForm />
			</Elements>
		</StripeProvider>
	);
};

export default PaymentFormConsumer;
