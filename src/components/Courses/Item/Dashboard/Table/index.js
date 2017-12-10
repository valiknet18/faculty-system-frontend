import React from 'react';

import './main.css';
import Column from "../Column";
import connect from "react-redux/es/connect/connect";
import {getTasksAction} from "../../../../../services/actions/tasks";
import withRouter from "react-router-dom/es/withRouter";

class Table extends React.Component {
    constructor(props) {
        super(props);

        let { dispatch, match: { params } } = props;

        dispatch(getTasksAction(params.course));
    }

    render() {
        let { tasks } = this.props;

        return (
            <div className="dashboard">
                <Column key="1" title="Не виконані" id="backlog" courseTasks={tasks.backlog} allowedDropEffect="move" />
                <Column key="2" title="В роботі" id="inProgress" courseTasks={tasks.inProgress} allowedDropEffect="move" />
                <Column key="3" title="Виконані" id="done" courseTasks={tasks.done} allowedDropEffect="move" />
                <Column key="4" title="Перевірені" id="checked" courseTasks={tasks.checked} allowedDropEffect="move" />
            </div>
        );
    }
}

function mapStateToProps({ tasks }) {
    return {
        tasks: tasks,
    }
}

export default withRouter(connect(mapStateToProps)(Table));
