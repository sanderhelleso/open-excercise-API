const BASE: number = 10000;

export default {
	small_business: process.env.STRIPE_SMALL_BUSINESS_PLAN,
	enterprise: process.env.STRIPE_ENTERPRISE_PLAN
};

export const planQuotaLimits = {
	individual: BASE,
	small_business: BASE * 15,
	enterprise: BASE * 75
};

export const planInfo = {
	small_business: {
		name: 'Small Business Plan',
		price: '$50'
	},
	enterprise: {
		name: 'Enterprise Plan',
		price: '$150'
	}
};

export const planIDtoKey = (id: string) => {
	if (id === process.env.STRIPE_SMALL_BUSINESS_PLAN) {
		return 'small_business';
	}

	if (id === process.env.STRIPE_ENTERPRISE_PLAN) {
		return 'enterprise';
	}
};
