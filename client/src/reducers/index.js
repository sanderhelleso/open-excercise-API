import { combineReducers } from 'redux';
import authReducer from './authReducer';
import quotaReducer from './quotaReducer';
import chartReducer from './chartReducer';

export default combineReducers({
	auth: authReducer,
	quota: quotaReducer,
	chart: chartReducer
});
