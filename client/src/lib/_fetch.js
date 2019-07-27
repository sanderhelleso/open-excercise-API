import store from '../store';

export default async (url, method, _headers, _body, isExample) => {
	try {
		const { auth: { token } } = store.getState();

		const headers = _headers ? { ..._headers } : {};
		const body = _body ? JSON.stringify(_body) : null;

		const response = await fetch(url, {
			method,
			headers: {
				...headers,
				'Content-Type': 'application/json',
				authorization: `Bearer ${isExample
					? '03cc52b8f916926ee6774399b07ce537fd2b13e5088f8395869f62e290adbcad'
					: token}`
			},
			body
		});

		if (response.status > 205) {
			const { message } = await response.json();
			throw message;
		}

		return response;
	} catch (error) {
		throw error;
	}
};
