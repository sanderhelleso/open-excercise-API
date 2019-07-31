import { combineReducers } from 'redux';
import authReducer from './authReducer';
import quotaReducer from './quotaReducer';
import chartReducer from './chartReducer';
import plansReducer from './plansReducer';

const appReducer = combineReducers({
	auth: authReducer,
	quota: quotaReducer,
	chart: chartReducer,
	plans: plansReducer
});

export default (state, action) => {
	// on logout, reset state
	if (action.type === 'LOGOUT') {
		navigator.credentials.preventSilentAccess();
		state = undefined;
	}

	return appReducer(state, action);
};
