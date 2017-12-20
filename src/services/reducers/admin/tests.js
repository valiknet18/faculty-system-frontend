import { GET_TESTS, CREATE_TEST } from '../../../services/constants/admin/tests';

let initialState = {
    tests: []
};

export default function tests(state = initialState, action) {
    switch (action.type) {
        case GET_TESTS:
            return Object.assign({}, state, {
                tests: action.tests
            });

        // case CREATE_TEST:
        //     return Object.assign({}, state, {});

        default:
            return state;
    }
}
