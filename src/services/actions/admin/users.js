
import parameters from '../../../config/parameters';
import endpoints from '../../../config/endpoints';

import request from '../../utils/request';
import {GET_USERS, INVITE_USER, WAITING_FOR_USERS} from "../../constants/admin/users";

export function getUsers() {
    return async (dispatch) => {
        dispatch({
            type: WAITING_FOR_USERS
        });

        let response = await request.get(`${parameters.prefix}/${endpoints.admin.users.getUsers}`);
        let json = await response.json();

        switch (response.status) {
            case 200:
                return dispatch({
                    type: GET_USERS,
                    users: json.users
                })
        }
    }
}

export function createUser(form) {
    return async (dispatch)  => {
        let response = await request.post(`${parameters.prefix}/${endpoints.admin.users.createUser}`, {
            body: JSON.stringify(form)
        });
        let json = await response.json();

        switch (response.status) {
            case 201:
                return dispatch({
                    type: INVITE_USER
                })
        }
    }
}
