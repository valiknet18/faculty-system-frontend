import {
    WAITING_FOR_LOGIN_RESPONSE,
    SIGN_IN_ERROR,
    SIGN_IN_SUCCESS,
    TOKEN_NOT_EXISTS,
    LOGOUT_USER
} from '../constants/auth';
import parameters from '../../config/parameters';
import endpoints from '../../config/endpoints';

import request from '../utils/request';

export function loginUser(form) {
    return async (dispatch) => {
        dispatch({
            type: WAITING_FOR_LOGIN_RESPONSE
        });

        let options = {
            body: JSON.stringify(form),
        };

        let response = await request.post(`${parameters.prefix}/${endpoints.auth.login}`, options);
        let json = await response.json();

        switch (response.status) {
            case 201:
                localStorage.setItem('token', json.token);
                request.token = json.token;

                return dispatch({
                    type: SIGN_IN_SUCCESS,
                    profile: json.profile,
                });
            case 404:
                return dispatch({
                    type: SIGN_IN_ERROR,
                    errors: {
                        main: json.error
                    }
                });
            case 422:
                return dispatch({
                    type: SIGN_IN_ERROR,
                    errors: json.errors
                });

            default:
                console.log(`Unprocessed status code ${response.status}`);
                return false;
        }
    }
}

export function loadUser() {
    return async (dispatch) => {
        dispatch({
            type: WAITING_FOR_LOGIN_RESPONSE,
        });

        if (!localStorage.getItem('token')) {
            return dispatch({
                type: TOKEN_NOT_EXISTS,
            });
        }

        let response = await request.get(`${parameters.prefix}/${endpoints.auth.profile}`);
        let profile = await response.json();

        switch(response.status) {
            case 200:
                return dispatch({
                    type: SIGN_IN_SUCCESS,
                    profile: profile
                });
            case 401:
                return dispatch(logout());

            default:
                console.log(`Unprocessed status code ${response.status}`);
                return false;
        }
    }
}

export function logout() {
    localStorage.removeItem('token');
    request.token = null;

    return {
        type: LOGOUT_USER
    };
}
