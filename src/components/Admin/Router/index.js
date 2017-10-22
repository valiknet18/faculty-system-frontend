import * as React from "react";

import { Route } from 'react-router-dom';

import Users from '../Users/Layout';
import Subjects from '../Subjects/Layout';
import Courses from '../Courses/Layout';
import Dashboard from '../Dashboard';

export default class Router extends React.Component {
    render() {
        return [
            <Route exact path="/admin" component={Dashboard} />,
            <Route exact path="/admin/users" component={Users} />,
            <Route path="/admin/subjects" component={Subjects} />,
            <Route path="/admin/courses" component={Courses} />,
        ];
    }
}
