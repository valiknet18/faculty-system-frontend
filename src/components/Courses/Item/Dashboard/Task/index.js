import React from 'react';
import { DragSource } from 'react-dnd'

import { Link } from 'react-router-dom';

import './main.css';

class Task extends React.Component {
    render() {
        let { courseTask, match: { params } } = this.props;

        const { connectDragSource } = this.props;

        return connectDragSource(
            <div className="task-item" key={courseTask.id}>
                <div className="header">
                    <p>
                        { courseTask.task.title }
                    </p>
                </div>
                <div className="actions">
                    <span className="full-name"><b>Студент:</b> { courseTask.user.firstName } { courseTask.user.lastName }</span>
                    <span className="deadline-date"><b>Дата завершення:</b> { courseTask.deadlineDate }</span>
                    <Link to={`/courses/` + params.course + `/tasks/` + courseTask.id} className="link">Перейти</Link>
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
    beginDrag({ courseTask }) {
        return courseTask;
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
