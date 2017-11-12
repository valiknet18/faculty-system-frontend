import React from 'react';

import { Route, Redirect } from 'react-router-dom'

import Dashboard from '../Dashboard/Layout';
import Analytics from '../Analytics/Layout';
import Task from '../Task/Layout';

export default class Router extends React.Component {
    render() {
        return [
            <Route path="/courses/:course/dashboard" component={Dashboard} key="dashboard" />,
            <Route path="/courses/:course/analytics" component={Analytics} key="analytics" />,
            <Route path="/courses/:course/tasks/:task" component={Task} key="task" />,
        ];
    }
}
