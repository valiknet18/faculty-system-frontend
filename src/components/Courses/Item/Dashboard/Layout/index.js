import React from 'react';

// import './main.css';

import Table from "../Table";
import Filter from "../Filter/Layout";

export default class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: [],
        }
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    };

    render() {
        return [
            <div className="dashboard-header" key="header">
                <h3>Дошка з задачами</h3>
            </div>,
            <Filter key="filters" />,
            <Table key="table" />
        ];
    }
}
