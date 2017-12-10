import { instructions } from "../constants/admin/adminSubjectMessage";
import { visibleAdminMessage } from "../actions/admin";

export default store => next => action => {
    const message = instructions[action.type];

    if (message) {
        store.dispatch(visibleAdminMessage(message));
    }

    console.log(action);

    next(action);
};
