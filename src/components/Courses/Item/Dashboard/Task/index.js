import React from 'react';

import './main.css';

export default class Task extends React.Component {
    render() {
        let { task } = this.props;

        return (
            <div className="task-item">
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
