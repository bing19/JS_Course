import {AUTH_ERROR, AUTH_SIGN_UP} from "../actions/types";

const DEFAULT_STATE = {
    isAuthenticated: false,
    token: '',
    errorMassage: ''
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case AUTH_SIGN_UP:
            console.log('[AuthReducer] got an AUTH_SIGN_UP action');
            return { ...state, token: action.payload, isAuthenticated: true, errorMassage: '' };
        case AUTH_ERROR:
            console.log('[AuthReducer] got an AUTH_ERRORR action');
            return { ...state, errorMassage: action.payload };
        default:
            return state;
    }
}