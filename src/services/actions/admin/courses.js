import {CREATE_COURSE, GET_COURSES, WAITING_FOR_COURSES} from "../../constants/admin/courses";
import parameters from '../../../config/parameters';
import endpoints from '../../../config/endpoints';

import request from '../../utils/request';
import { ADD_COURSE_SUCCESS } from "../../constants/admin/adminSubjectMessage";
import { visibleAdminMessage } from "./index";

export function getCourses() {
    return async (dispatch) => {
        dispatch({
            type: WAITING_FOR_COURSES
        });

        let response = await request.get(`${parameters.prefix}/${endpoints.admin.courses.getCourses}`);
        let json = await response.json();

        switch (response.status) {
            case 200:
                return dispatch({
                    type: GET_COURSES,
                    courses: json.courses
                })
        }
    }
}

export function createCourse(form) {
    return async (dispatch)  => {
        let response = await request.post(`${parameters.prefix}/${endpoints.admin.courses.createCourse}`, {
            body: JSON.stringify(form)
        });
        let json = await response.json();

        switch (response.status) {
            case 201:
                dispatch(visibleAdminMessage(ADD_COURSE_SUCCESS));

                return dispatch({
                    type: CREATE_COURSE
                })
        }
    }
}
