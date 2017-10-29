import {
    GET_SUBJECTS, GET_COURSE, WAITING_FOR_SUBJECTS, GET_SUBJECT_THEMES, WAITING_FOR_THEMES,
    GET_SUBJECT_TASKS, WAITING_FOR_TASKS
} from '../../constants/admin/subjects';

let initialState = {
    subjects: [],
    waitingForSubjects: false,
    subject: {},
    waitingForSubject: false,
    waitingForThemes: false,
    themes: [],
    theme: {},
    waitingForTasks: false,
    tasks: [],
};

export default function subjects(state = initialState, payload) {
    switch (payload.type) {
        case WAITING_FOR_SUBJECTS:
            return Object.assign({}, state, {
                waitingForSubjects: true
            });

        case GET_SUBJECTS:
            return Object.assign({}, state, {
                waitingForSubjects: false,
                subjects: payload.subjects
            });

        case WAITING_FOR_THEMES:
            return Object.assign({}, state, {
                waitingForThemes: true,
            });

        case GET_SUBJECT_THEMES:
            return Object.assign({}, state, {
                waitingForThemes: false,
                themes: payload.themes
            });

        case WAITING_FOR_TASKS:
            return Object.assign({}, state, {
                waitingForTasks: true,
            });

        case GET_SUBJECT_TASKS:
            return Object.assign({}, state, {
                waitingForTasks: false,
                tasks: payload.tasks,
            });

        default:
            return state;
    }
}
