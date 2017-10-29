import {GET_LEARNING_SEMESTERS, WAITING_FOR_LEARNING_SEMESTERS} from "../../constants/admin/learning-semesters";

let initialState = {
    waitingForLearningSemesters: false,
    learningSemesters: [],
};

export default function learningSemesters(state = initialState, payload) {
    switch (payload.type) {
        case GET_LEARNING_SEMESTERS:
            return Object.assign({}, state, {
                waitingForLearningSemesters: false,
                learningSemesters: payload.learningSemesters
            });

        case WAITING_FOR_LEARNING_SEMESTERS:
            return Object.assign({}, state, {
                waitingForLearningSemesters: true,
            });

        default:
            return state;
    }
}
