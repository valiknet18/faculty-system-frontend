import { goBack } from 'react-router-redux';

import parameters from '../../../config/parameters';
import endpoints from '../../../config/endpoints';

import request from '../../utils/request';
import {
    GET_USERS,
    INVITE_USER,
    WAITING_FOR_USERS,
    GET_USER
} from "../../constants/admin/users";

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
    return async (dispatch) => {
        form['role'] = form['role'] === 1 ? 'student' : 'teacher';

        let response = await request.post(`${parameters.prefix}/${endpoints.admin.users.createUser}`, {
            body: JSON.stringify(form)
        });
        let json = await response.json();

        switch (response.status) {
            case 201:
                dispatch(goBack());

                return dispatch({
                    type: INVITE_USER
                })
        }
    }
}

export function editUser(params, form) {
    return async (dispatch) => {
        const endpoint = `${parameters.prefix}/${endpoints.admin.users.editUser}`
            .replace(':user:', params.user);

        form['role'] = form['role'] === 1 ? 'student' : 'teacher';

        let response = await request.put(endpoint, {
            body: JSON.stringify(form)
        });
        let json = await response.json();

        // switch (response.status) {
        //     case 201:
        //         return dispatch({
        //             type: INVITE_USER
        //         })
        // }
    }
}

export function getTeachers() {
    return async (dispatch) => {
        dispatch({
            type: WAITING_FOR_USERS
        });

        let response = await request.get(`${parameters.prefix}/${endpoints.admin.users.getTeachers}`);
        let json = await response.json();

        switch (response.status) {
            case 200:
                return dispatch({
                    type: GET_USERS,
                    users: json.teachers
                })
        }
    }
}

export function getUser(params) {
    return async (dispatch) => {
        const endpoint = `${parameters.prefix}/${endpoints.admin.users.getUser}`
            .replace(':user:', params.user);

        let response = await request.get(endpoint);
        let user = await response.json();

        switch (response.status) {
            case 200:
                return dispatch({
                    type: GET_USER,
                    user: user,
                })
        }
    }
}
