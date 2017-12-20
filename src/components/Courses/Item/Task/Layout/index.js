import React from 'react';

import './main.css';
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import {getTaskAction} from "../../../../../services/actions/tasks";

class Layout extends React.Component {
    constructor(props) {
        super(props);

        let { dispatch, match: { params } } = this.props;

        dispatch(getTaskAction(params));
    }

    render() {
        let { task } = this.props;

        let content = (
            <div className="task-wrapper"></div>
        );

        if (task.task && task.user) {
            content = (
                <div className="task-wrapper">
                    <div className="header">
                        <h3 className="title">{ task.task.title }</h3>
                    </div>
                    <div className="body">
                        <div className="content">
                            <p>
                                { task.task.content  }
                            </p>
                        </div>
                        <div className="info">
                            <div className="item status">
                                <div>Статус:</div>
                                <div>{ task.status }</div>
                            </div>
                            <div className="item deadline-date">
                                <div>Дата завершення:</div>
                                <div>{ task.deadlineDate }</div>
                            </div>
                            <div className="item assigned">
                                <div>Виконавець:</div>
                                <div>{ task.user.firstName } { task.user.lastName }</div>
                                {/*<div>{ task.student }</div>*/}
                            </div>
                            <div className="item teacher">
                                <div>Email для відправки готового рішення:</div>
                                <div>
                                    <a href={`mailto:${task.teacher.email}?subject=Результат роботи`}>{ task.teacher.email }</a>
                                </div>
                                {/*<div>{ task.student }</div>*/}
                            </div>
                            <div className="item test">
                                <div>Посилання на проходження тесту:</div>
                                <div>
                                    <Link to={`/tests/1/preview`}>Назва тесту</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return content;
    }
}

function mapStateToProps({ tasks }) {
    return {
        task: tasks.task
    }
}

export default withRouter(connect(mapStateToProps)(Layout));
