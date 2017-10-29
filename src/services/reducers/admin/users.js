import {GET_USERS, WAITING_FOR_USERS} from "../../constants/admin/users";

let initialState = {
    users: [],
    waitingForUsers: false
};

export default function users(state = initialState, payload) {
    switch (payload.type) {
        case WAITING_FOR_USERS:
            return Object.assign({}, state, {
                waitingForUsers: true
            });

        case GET_USERS:
            return Object.assign({}, state, {
                waitingForUsers: false,
                users: payload.users
            });

        default:
            return state;
    }
}
