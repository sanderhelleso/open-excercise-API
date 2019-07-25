import store from '../store';

export default async (url, method, _headers) => {
	try {
		const { auth: { token } } = store.getState();

		const headers = _headers ? { ..._headers } : {};

		const response = await fetch(url, {
			method,
			headers: {
				...headers,
				authorization: `Bearer ${token}`
			}
		});

		return response;
	} catch (error) {
		throw error;
	}
};
