import { LOGIN } from "../actions/types";
import { LOGOUT } from "../actions/types";

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
                isAuthenticated: null,
                token: null
            };
        default:
            return state;
    }
};
