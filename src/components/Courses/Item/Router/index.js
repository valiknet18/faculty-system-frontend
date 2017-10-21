import React from 'react';

import { Route, Redirect } from 'react-router-dom'

import Dashboard from '../Dashboard/Layout';
import Analytics from '../Analytics/Layout';

export default class Router extends React.Component {
    render() {
        return [
            <Redirect from="/course" to="/courses/course/dashboard" />,
            <Route exact path="/courses/course/dashboard" component={Dashboard} />,
            <Route exact path="/courses/course/analytics" component={Analytics} />
        ];
    }
}
