import {
    GET_COURSES_ACTION,
    WAITING_FOR_GET_COURSES,
    GETTING_COURSES_ERROR
} from '../../services/constants/courses';

import parameters from '../../config/parameters';
import endpoints from '../../config/endpoints';
import request from '../utils/request';

export function getCourses() {
    return async (dispatch) => {
        dispatch({
            type: WAITING_FOR_GET_COURSES
        });

        let response = await request.get(`${parameters.prefix}/${endpoints.courses.list}`);
        let json = await response.json();

        switch (response.status) {
            case 200:
                return dispatch({
                    type: GET_COURSES_ACTION,
                    courses: json.courses
                });

            case 422:
                return dispatch({
                    type: GETTING_COURSES_ERROR
                });
        }
    }
}
