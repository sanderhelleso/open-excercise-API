import { combineReducers } from 'redux';
import authReducer from './authReducer';
import quotaReducer from './quotaReducer';

export default combineReducers({
	auth: authReducer,
	quota: quotaReducer
});
