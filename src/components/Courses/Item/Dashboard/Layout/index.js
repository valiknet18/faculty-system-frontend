import React from 'react';
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
// import './main.css';

import Table from "../Table";
import Filter from "../Filter/Layout";

export default class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return [
            <div className="dashboard-header" key="header">
                <h3>Дошка з задачами</h3>
            </div>,
            <Filter key="filters" />,
            <DragDropContextProvider backend={HTML5Backend}>
                <Table key="table" />
            </DragDropContextProvider>
        ];
    }
}
