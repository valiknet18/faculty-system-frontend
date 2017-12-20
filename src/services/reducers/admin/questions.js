import { GET_QUESTIONS } from '../../../services/constants/admin/questions';

let initialState = {
    questions: []
};

export default function tests(state = initialState, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return Object.assign({}, state, {
                questions: action.questions
            });

        default:
            return state;
    }
}
