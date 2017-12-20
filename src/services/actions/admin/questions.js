import parameters from '../../../config/parameters';
import endpoints from '../../../config/endpoints';
import request from '../../utils/request';
import { GET_QUESTIONS, CREATE_QUESTION } from '../../../services/constants/admin/questions';

export function getQuestions(subject, test) {
    return async (dispatch) => {
        const endpoint = endpoints.admin.questions.getQuestions
            .replace(':subject:', subject)
            .replace(':test:', test);

        let response = await request.get(`${parameters.prefix}/${endpoint}`);
        let json = await response.json();

        switch (response.status) {
            case 200:
                return dispatch({
                    type: GET_QUESTIONS,
                    questions: json.questions,
                })
        }
    }
}

export function createQuestion(subject, test, form) {
    return async (dispatch) => {
        const endpoint = endpoints.admin.tests.createTest
            .replace(':subject:', subject)
            .replace(':test:', test);

        let response = await request.post(`${parameters.prefix}/${endpoint}`, {
            body: JSON.stringify(form),
        });
        let json = await response.json();

        switch (response.status) {
            case 201:
                return dispatch({
                    type: CREATE_QUESTION,
                    tests: json.tests
                });
        }
    }
}
