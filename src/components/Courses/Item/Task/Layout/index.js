import React from 'react';

import './main.css';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getTaskAction} from "../../../../../services/actions/tasks";

class Layout extends React.Component {
    constructor(props) {
        super(props);

        let { dispatch, match: { params } } = this.props;

        dispatch(getTaskAction(params));
    }

    render() {
        let { task } = this.props;

        return (
            <div className="task-wrapper">
                <div className="header">
                    <h3 className="title">{ task.title }</h3>
                </div>
                <div className="body">
                    <div className="content">
                        <p>
                            { task.content  }
                        </p>
                    </div>
                    <div className="info">
                        <div className="item status">
                            <div>Статус:</div>
                            <div>{ task.status }</div>
                        </div>
                        <div className="item last-update-date">
                            <div>Дата останього оновлення:</div>
                            <div>2017-01-01 10:00</div>
                        </div>
                        <div className="item deadline-date">
                            <div>Дата завершення:</div>
                            <div>2017-01-01 10:00</div>
                        </div>
                        <div className="item assigned">
                            <div>Виконавець:</div>
                            <div>{ task.fullname }</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ tasks }) {
    return {
        task: tasks.task
    }
}

export default withRouter(connect(mapStateToProps)(Layout));
