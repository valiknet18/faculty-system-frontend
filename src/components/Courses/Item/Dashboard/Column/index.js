import React from 'react';
import Task from "../Task/index";
import { DropTarget } from 'react-dnd'

import './main.css';
import connect from "react-redux/es/connect/connect";
import {moveTaskToAnotherColumn} from "../../../../../services/actions/tasks";
import {withRouter} from "react-router-dom";

class Column extends React.Component {
    render() {
        let { title, tasks, id } = this.props;
        const { canDrop, isOver, allowedDropEffect, connectDropTarget } = this.props;
        const isActive = canDrop && isOver;

        let columnClasses = `column `;

        if (isActive) {
            columnClasses += `dragged`
        }

        return connectDropTarget(
            <div className={columnClasses} key={id}>
                <div className="header">
                    { title }
                </div>
                <div className="tasks">
                    {
                        tasks.map((task) => {
                            return <Task task={task} match={this.props.match} />
                        })
                    }
                </div>
            </div>
        );
    }
}

const taskTarget = {
    drop(props, monitor, component) {
        let {id, allowedDropEffect} = props;
        let item = monitor.getItem();

        let { dispatch, match: { params }} = component.props;

        params = Object.assign({}, params, {
            task: item
        });

        dispatch(moveTaskToAnotherColumn(params, id));

        return {
            id: id,
            allowedDropEffect
        }
    },

    canDrop({ id }, monitor) {
        let item = monitor.getItem();

        return (item.status === 'backlog' && id === 'inProgress') ||
            (item.status === 'inProgress' && id === 'done') ||
            (item.status === 'inProgress' && id === 'backlog') ||
            (item.status === 'done' && id === 'backlog') ||
            (item.status === 'done' && id === 'checked') ||
            (item.status === 'checked' && id === 'backlog');
    }
};

Column = DropTarget('Task', taskTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
}))(Column);

export default withRouter(connect()(Column));
