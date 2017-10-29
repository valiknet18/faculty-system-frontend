import {
    GET_COURSES_ACTION,
    WAITING_FOR_GET_COURSES
} from '../../services/constants/courses';

let initialState = {
    courses: [],
    waitingForSubjects: false
};

export default function courses(state = initialState, action) {
    switch (action.type) {
        case GET_COURSES_ACTION:
            return Object.assign({}, state, {
                courses: action.courses,
                waitingForCourses: false
            });

        case WAITING_FOR_GET_COURSES:
            return Object.assign({}, state, {
                waitingForCourses: true
            });

        default:
            return state;
    }
}
