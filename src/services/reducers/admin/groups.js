import {GET_GROUPS, WAITING_FOR_GROUPS} from "../../constants/admin/groups";

let initialState = {
    waitingForGroups: false,
    groups: [],
};

export default function groups(state = initialState, payload) {
    switch (payload.type) {
        case GET_GROUPS:
            return Object.assign({}, state, {
                waitingForGroups: false,
                groups: payload.groups
            });

        case WAITING_FOR_GROUPS:
            return Object.assign({}, state, {
                waitingForGroups: true,
            });

        default:
            return state;
    }
}
