import { combineReducers } from "redux";
import authReducer from "./authReducer";
import quotaReducer from "./quotaReducer";

const appReducer = combineReducers({
    auth: authReducer,
    quota: quotaReducer
});

export default (state, action) => {
    // on logout, reset state
    if (action.type === "LOGOUT") {
        navigator.credentials.preventSilentAccess();
        state = undefined;
    }

    return appReducer(state, action);
};
