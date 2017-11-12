import { GET_USERS, WAITING_FOR_USERS, GET_USER } from "../../constants/admin/users";

let initialState = {
    users: [],
    waitingForUsers: false,
    user: {},
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

        case GET_USER:
            return Object.assign({}, state, {
                user: payload.user,
            });

        default:
            return state;
    }
}
