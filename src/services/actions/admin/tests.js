import parameters from '../../../config/parameters';
import endpoints from '../../../config/endpoints';
import request from '../../utils/request';
import { GET_TESTS } from '../../../services/constants/admin/tests';
import {CREATE_TEST} from "../../constants/admin/tests";

export function getTests(subject) {
    return async (dispatch) => {
        const endpoint = endpoints.admin.tests.getTests
            .replace(':subject:', subject);

        let response = await request.get(`${parameters.prefix}/${endpoint}`);
        let json = await response.json();

        switch (response.status) {
            case 200:
                return dispatch({
                    type: GET_TESTS,
                    tests: json.tests
                })
        }
    }
}

export function createTest(subject, form) {
    return async (dispatch) => {
        const endpoint = endpoints.admin.tests.createTest
            .replace(':subject:', subject);

        let response = await request.post(`${parameters.prefix}/${endpoint}`, {
            body: JSON.stringify(form),
        });
        let json = await response.json();

        switch (response.status) {
            case 201:
                return dispatch({
                    type: CREATE_TEST,
                    tests: json.tests
                });
        }
    }
}
