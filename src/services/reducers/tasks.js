import {
    MOVE_TASK_TO_DESTINATION_COLUMN,
    GET_TASKS,
    GET_TASK
} from "../constants/tasks";

let initialState = {
    backlog: [],
    inProgress: [],
    done: [],
    checked: [],
    task: {}
};

export default function tasks(state = initialState, payload) {
    switch (payload.type) {
        case GET_TASKS:
            return Object.assign({}, state, {
                backlog: ('backlog' in payload.tasks) ? payload.tasks.backlog : [],
                inProgress: ('inProgress' in payload.tasks) ? payload.tasks.inProgress : [],
                done: ('done' in payload.tasks) ? payload.tasks.done : [],
                checked: ('checked' in payload.tasks) ? payload.tasks.checked : [],
            });

        case MOVE_TASK_TO_DESTINATION_COLUMN:
            let index;
            let task = payload.task;
            let original = state[payload.original];
            let destination = state[payload.destination];

            if (index = original.indexOf(task) !== -1) {
                original = original.filter((item) => {
                    return item.id !== task.id;
                });
            }

            task.status = payload.destination;
            destination.push(task);

            return Object.assign({}, state, {
                [payload.original]: original,
                [payload.destination]: destination
            });

        case GET_TASK:
            return Object.assign({}, state, {
                task: payload.task,
            });

        default:
            return state;
    }
}
