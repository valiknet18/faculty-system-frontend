import React from 'react';

import { Route, Redirect } from 'react-router-dom'

import Dashboard from '../Dashboard/Layout';
import Analytics from '../Analytics/Layout';
import Task from '../Task/Layout';
import Create from '../Task/Create';
import Edit from '../Task/Edit';

export default class Router extends React.Component {
    render() {
        return [
            <Route path="/courses/:course/dashboard" component={Dashboard} key="dashboard" />,
            <Route path="/courses/:course/analytics" component={Analytics} key="analytics" />,
            <Route path="/courses/:course/tasks/:task" component={Task} key="task" />,
            <Route path="/courses/:course/tasks/:task/edit" component={Edit} key="edit" />,
            <Route path="/courses/:course/tasks/create" component={Create} key="create" />,
        ];
    }
}
