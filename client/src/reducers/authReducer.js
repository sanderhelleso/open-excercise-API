import { LOGIN } from "../actions/types";
import { LOGOUT } from "../actions/types";
import rootReducer from "./";

const initialState = {
    isAuthenticated: null,
    token: null
};

export default (state = initialState, aciton) => {
    switch (aciton.type) {
        case LOGIN:
            return {
                ...state,
                ...aciton.payload,
                isAuthenticated: true
            };
        case LOGOUT:
            return {
                state
            };
        default:
            return state;
    }
};
