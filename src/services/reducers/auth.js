import {
    WAITING_FOR_LOGIN_RESPONSE,
    SIGN_IN_ERROR,
    SIGN_IN_SUCCESS,
    LOGOUT_USER,
    TOKEN_NOT_EXISTS
} from '../constants/auth';

let initialState = {
    profile: null,
    waitingForSignInUser: false,
    signInErrors: null,
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case WAITING_FOR_LOGIN_RESPONSE:
            return Object.assign({}, state, {
                waitingForSignUser: true
            });

        case SIGN_IN_SUCCESS:
            return Object.assign({}, state, {
                profile: action.profile,
                waitingForSignInUser: false,
            });

        case SIGN_IN_ERROR:
            return Object.assign({}, state, {
                signInErrors: action.errors,
                waitingForSignInUser: false,
            });

        case TOKEN_NOT_EXISTS:
        case LOGOUT_USER:
            return Object.assign({}, state, {
                profile: -1,
                waitingForSignInUser: false,
            });

        default:
            return state;
    }
}
