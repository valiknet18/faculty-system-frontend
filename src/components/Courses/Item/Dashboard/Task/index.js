import React from 'react';
import { DragSource } from 'react-dnd'

import { Link } from 'react-router-dom';

import './main.css';

class Task extends React.Component {
    render() {
        let { task, match: { params } } = this.props;

        const { connectDragSource } = this.props;

        return connectDragSource(
            <div className="task-item" key={task.id}>
                <div className="header">
                    <p>
                        { task.title }
                    </p>
                </div>
                <div className="actions">
                    <span className="full-name">{ task.fullname }</span>
                    <Link to={`/courses/` + params.course + `/tasks/` + task.id} className="link">Перейти</Link>
                </div>
            </div>
        );
    }
}

function mapSource(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    };
}

const taskSource = {
    beginDrag({ task }) {
        return task;
    },

    canDrag(props, monitor) {
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();

        if (!dropResult) {
            return true;
        }

        return item.status === 'backlog' && dropResult.id === 'in-progress';
    },

    isDragging(props, monitor) {
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();

        if (!dropResult) {
            return false;
        }

        return item.status === 'backlog' && dropResult.id === 'in-progress';
    },

    endDrag(props, monitor) {
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();
    },
};

Task = DragSource('Task', taskSource, mapSource)(Task);

export default Task;
