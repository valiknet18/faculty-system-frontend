import {
    GET_LEARNING_SEMESTERS,
    WAITING_FOR_LEARNING_SEMESTERS,
    CREATE_LEARNING_SEMESTER
} from "../../constants/admin/learning-semesters";
import parameters from '../../../config/parameters';
import endpoints from '../../../config/endpoints';

import request from '../../utils/request';

export function getLearningSemesters() {
    return async (dispatch) => {
        dispatch({
            type: WAITING_FOR_LEARNING_SEMESTERS
        });

        let response = await request.get(`${parameters.prefix}/${endpoints.admin.learningSemesters.getLearningSemesters}`);
        let json = await response.json();

        switch (response.status) {
            case 200:
                return dispatch({
                    type: GET_LEARNING_SEMESTERS,
                    learningSemesters: json.learningSemesters
                })
        }
    }
}

export function createLearningSemester(form) {
    return async (dispatch)  => {
        let response = await request.post(`${parameters.prefix}/${endpoints.admin.learningSemesters.createLearningSemester}`, {
            body: JSON.stringify(form)
        });
        let json = await response.json();

        switch (response.status) {
            case 201:
                return dispatch({
                    type: CREATE_LEARNING_SEMESTER
                })
        }
    }
}
