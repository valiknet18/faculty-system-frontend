import React from 'react';

import './main.css';
import Column from "../Column";

export default class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let tasks = [{
            id: 1,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        }, {
            id: 2,
            description: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }, {
            id: 3,
            description: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }, {
            id: 4,
            description: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }, {
            id: 5,
            description: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }, {
            id: 6,
            description: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }, {
            id: 7,
            description: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }];

        return (
            <div className="dashboard">
                <Column key="1" title="Не виконані" id="backlog" tasks={tasks} allowedDropEffect="move" />
                <Column key="2" title="В роботі" id="in-progress" tasks={[]} allowedDropEffect="move" />
                <Column key="3" title="Виконані" id="done" tasks={[]} allowedDropEffect="move" />
                <Column key="4" title="Перевірені" id="checked" tasks={[]} allowedDropEffect="move" />
            </div>
        );
    }
}
