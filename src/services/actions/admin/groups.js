import { goBack } from 'react-router-redux';

import {CREATE_GROUP, GET_GROUPS, WAITING_FOR_GROUPS, EDIT_GROUPS} from "../../constants/admin/groups";
import parameters from '../../../config/parameters';
import endpoints from '../../../config/endpoints';

import request from '../../utils/request';

export function getGroups() {
    return async (dispatch) => {
        dispatch({
            type: WAITING_FOR_GROUPS
        });

        let response = await request.get(`${parameters.prefix}/${endpoints.admin.groups.getGroups}`);
        let json = await response.json();

        switch (response.status) {
            case 200:
                return dispatch({
                    type: GET_GROUPS,
                    groups: json.groups
                })
        }
    }
}

export function createGroup(form) {
    return async (dispatch)  => {
        let response = await request.post(`${parameters.prefix}/${endpoints.admin.groups.createGroup}`, {
            body: JSON.stringify(form)
        });
        let json = await response.json();

        switch (response.status) {
            case 201:
                dispatch(goBack());

                return dispatch({
                    type: CREATE_GROUP
                })
        }
    }
}

export function editGroup(params, form) {
    return async (dispatch)  => {
        const endpoint = `${parameters.prefix}/${endpoints.admin.groups.editGroup}`
            .replace(':group:', params.user);

        let response = await request.put(endpoint, {
            body: JSON.stringify(form)
        });
        let json = await response.json();

        switch (response.status) {
            case 200:
                dispatch(goBack());

                return dispatch({
                    type: EDIT_GROUPS
                });
        }
    }
}
