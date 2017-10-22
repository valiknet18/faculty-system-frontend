import React from 'react';
import Task from "../Task/index";
import { DropTarget } from 'react-dnd'

import './main.css';

class Column extends React.Component {
    render() {
        let { title, tasks, id } = this.props;
        const { canDrop, isOver, allowedDropEffect, connectDropTarget } = this.props;
        const isActive = canDrop && isOver;

        let columnClasses = `column `;

        if (isActive) {
            columnClasses += `dragged`
        }

        console.log(id, isActive, columnClasses);

        return connectDropTarget(
            <div className={columnClasses} key={id}>
                <div className="header">
                    { title }
                </div>
                <div className="tasks">
                    {
                        tasks.map((task) => {
                            return <Task task={task} />
                        })
                    }
                </div>
            </div>
        );
    }
}

const taskTarget = {
    drop({id, allowedDropEffect}) {
        return {
            id: id,
            allowedDropEffect
        }
    },
};

Column = DropTarget('Task', taskTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
}))(Column);

export default Column;
