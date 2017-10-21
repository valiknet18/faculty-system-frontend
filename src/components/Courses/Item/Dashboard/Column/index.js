import React from 'react';
import Task from "../Task/index";

export default class Column extends React.Component {
    render() {
        let { title, tasks } = this.props;

        return (
            <div className="column">
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
