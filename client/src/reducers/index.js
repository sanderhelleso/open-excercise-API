
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import quotaReducer from './quotaReducer';
import chartReducer from './chartReducer';

const appReducer =  combineReducers({
	auth: authReducer,
	quota: quotaReducer,
	chart: chartReducer
});

export default (state, action) => {
    // on logout, reset state
    if (action.type === "LOGOUT") {
        navigator.credentials.preventSilentAccess();
        state = undefined;
    }

    return appReducer(state, action);
};
