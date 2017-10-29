import {GET_COURSES, WAITING_FOR_COURSES} from "../../constants/admin/courses";

let initialState = {
    waitingForCourses: false,
    courses: [],
};

export default function courses(state = initialState, payload) {
    switch (payload.type) {
        case GET_COURSES:
            return Object.assign({}, state, {
                waitingForCourses: false,
                courses: payload.courses
            });

        case WAITING_FOR_COURSES:
            return Object.assign({}, state, {
                waitingForCourses: true,
            });

        default:
            return state;
    }
}
