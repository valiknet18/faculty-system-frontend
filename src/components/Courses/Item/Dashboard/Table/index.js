import React from 'react';

import './main.css';
import Column from "../Column";

export default class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let tasks = [{
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        }, {
            description: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }, {
            description: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }, {
            description: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }, {
            description: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }, {
            description: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }, {
            description: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }];

        return (
            <div className="dashboard">
                <Column title="Не виконані" tasks={tasks} />
                <Column title="В роботі" tasks={[]} />
                <Column title="Виконані" tasks={[]} />
                <Column title="Перевірені" tasks={[]} />
            </div>
        );
    }
}
