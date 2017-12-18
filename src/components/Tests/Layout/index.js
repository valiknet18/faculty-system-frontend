import React from 'react';
import Router from '../Router';
import Paper from "material-ui/Paper";

export default class Layout extends React.Component {
    render() {
        return (
            <Paper className="layout admin-layout">
                <Router />
            </Paper>
        );
    }
}
