import {
    MOVE_TASK_FROM_ORIGINAL_COLUMN,
    MOVE_TASK_TO_DESTINATION_COLUMN,
    GET_TASKS,
    GET_TASK
} from "../constants/tasks";
import parameters from '../../config/parameters';
import endpoints from '../../config/endpoints';

import request from '../utils/request';

export function getTasksAction(course) {
    return async (dispatch) => {
        const endpoint = `${parameters.prefix}/${endpoints.courses.getTasks}`.replace(':course:', course);

        let response = await request.get(endpoint);
        let json = await response.json();

        switch (response.status) {
            case 200:
                return dispatch({
                    type: GET_TASKS,
                    tasks: json.tasks
                });
        }
    }
}

export function moveTaskToAnotherColumn(params, column) {
    return async (dispatch) => {
        const endpoint = `${parameters.prefix}/${endpoints.courses.moveTask}`
            .replace(':course:', params.course)
            .replace(':task:', params.task.id);

        let response = await request.put(endpoint, {
            body: JSON.stringify({
                status: column
            })
        });
        let json = await response.json();

        switch (response.status) {
            case 200:
                return dispatch(getTasksAction(params.course));
        }
    }
}

export function getTaskAction(params) {
    return async (dispatch) => {
        const endpoint = `${parameters.prefix}/${endpoints.courses.getTask}`
            .replace(':course:', params.course)
            .replace(':task:', params.task);

        let response = await request.get(endpoint);
        let task = await response.json();

        switch (response.status) {
            case 200:
                return dispatch({
                    type: GET_TASK,
                    task: task,
                });
        }
    }
}
