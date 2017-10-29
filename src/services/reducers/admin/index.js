import {CREATE_SUBJECT, CREATE_THEME} from "../../constants/admin/subjects";
import {HIDE_MESSAGE} from "../../constants/admin/index";
import {CREATE_GROUP} from "../../constants/admin/groups";
import {CREATE_LEARNING_SEMESTER} from "../../constants/admin/learning-semesters";

let initialState = {
    message: null
};

export default function admin(state = initialState, payload) {
    switch (payload.type) {
        case CREATE_SUBJECT:
            return Object.assign({}, state, {
                message: 'Предмет успішно створений'
            });

        case CREATE_THEME:
            return Object.assign({}, state, {
                message: 'Тема успішно створена'
            });

        case CREATE_GROUP:
            return Object.assign({}, state, {
                message: 'Група успішно створена'
            });

        case CREATE_LEARNING_SEMESTER:
            return Object.assign({}, state, {
                message: 'Навчальний семестр успішно створений'
            });

        case HIDE_MESSAGE:
            return Object.assign({}, state, {
                message: null
            });

        default:
            return state;
    }
}
