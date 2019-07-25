import _fetch from './_fetch';
import store from '../store';

import loginAction from '../actions/loginAction';
import setQuotaAction from '../actions/setQuotaAction';

export default async (isRegister, body) => {
	try {
		const response = await _fetch(
			`http://localhost:4000/auth/${isRegister ? 'register' : 'login'}`,
			'POST',
			null,
			body
		);

		const data = await response.json();

		const { quota } = data;
		delete data.quota;

		store.dispatch(setQuotaAction(quota));
		store.dispatch(loginAction(data));
	} catch (error) {
		alert(error);
	}
};
