import { goBack } from 'react-router-redux';

import {
    WAITING_FOR_SUBJECTS,
    GET_SUBJECTS,
    GET_SUBJECT_THEMES,
    GET_SUBJECT_TASKS,
    WAITING_FOR_THEMES,
    WAITING_FOR_TASKS,
    CREATE_SUBJECT,
    CREATE_THEME,
    CREATE_TASK
} from '../../constants/admin/subjects';
import parameters from '../../../config/parameters';
import endpoints from '../../../config/endpoints';

import request from '../../utils/request';

export function getSubjects() {
    return async (dispatch) => {
        dispatch({
            type: WAITING_FOR_SUBJECTS
        });

        let response = await request.get(`${parameters.prefix}/${endpoints.admin.subjects.getSubjects}`);
        let json = await response.json();

        switch (response.status) {
            case 200:
                return dispatch({
                    type: GET_SUBJECTS,
                    subjects: json.subjects
                });
        }
    }
}

export function createSubject(form) {
    return async (dispatch) => {
        let response = await request.post(`${parameters.prefix}/${endpoints.admin.subjects.createSubject}`, {
            body: JSON.stringify(form)
        });
        let json = await response.json();

        switch (response.status) {
            case 201:
                dispatch(goBack());

                return dispatch({
                    type: CREATE_SUBJECT
                })
        }
    }
}

export function getThemes(params) {
    return async (dispatch) => {
        dispatch({
            type: WAITING_FOR_THEMES
        });

        const endpoint = `${parameters.prefix}/${endpoints.admin.subjects.getThemes}`
            .replace(':subject', params.subject);

        let response = await request.get(endpoint);
        let json = await response.json();

        switch (response.status) {
            case 200:
                return dispatch({
                    type: GET_SUBJECT_THEMES,
                    themes: json.themes
                });
        }
    }
}

export function createTheme(params, form) {
    return async (dispatch) => {
        const endpoint = `${parameters.prefix}/${endpoints.admin.subjects.createTheme}`
            .replace(':subject', params.subject);

        let response = await request.post(endpoint, {
            body: JSON.stringify(form)
        });
        let json = await response.json();

        switch (response.status) {
            case 201:
                return dispatch({
                    type: CREATE_THEME
                })
        }
    }
}

export function getTasks(params) {
    return async (dispatch) => {
        dispatch({
            type: WAITING_FOR_TASKS
        });

        const endpoint = `${parameters.prefix}/${endpoints.admin.subjects.getTasks}`
            .replace(':subject', params.subject)
            .replace(':theme', params.theme);

        let response = await request.get(endpoint);
        let json = await response.json();

        switch (response.status) {
            case 200:
                return dispatch({
                    type: GET_SUBJECT_TASKS,
                    tasks: json.tasks
                });
        }
    }
}

export function createTask(params, form) {
    return async (dispatch) => {
        const endpoint = `${parameters.prefix}/${endpoints.admin.subjects.createTask}`
            .replace(':subject', params.subject)
            .replace(':theme', params.theme);

        let response = await request.post(endpoint, {
            body: JSON.stringify(form)
        });
        let json = await response.json();

        switch (response.status) {
            case 201:
                return dispatch({
                    type: CREATE_TASK
                })
        }
    }
}
