import React from 'react';
import { DragSource } from 'react-dnd'

import './main.css';

class Task extends React.Component {
    render() {
        let { task } = this.props;

        const { isDragging, connectDragSource } = this.props;

        return connectDragSource(
            <div className="task-item" key={task.id}>
                <div className="header">
                    <p>
                        { task.description }
                    </p>
                </div>
                <div className="actions">
                    <span className="full-name">Гриневич Валентин</span>
                    <span className="link">Перейти</span>
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
    beginDrag(props) {
        return {
            id: props.id,
        }
    },

    endDrag(props, monitor) {
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();

        console.log(monitor);

        console.log(item);
        console.log(dropResult);
        console.log(props);
    },
};

Task = DragSource('Task', taskSource, mapSource)(Task);

export default Task;
