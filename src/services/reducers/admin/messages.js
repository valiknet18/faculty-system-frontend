import {HIDE_MESSAGE,VISIBLE_MESSAGE} from "../../constants/admin/index";

let initialState = {
    message: null
};

export default function admin(state = initialState, action) {
    switch (action.type) {
        case HIDE_MESSAGE:
            return Object.assign({}, state, {
                message: null
            });

        case VISIBLE_MESSAGE:
            return Object.assign({}, state, {
                message: action.message
            });

        default:
            return state;
    }
}
