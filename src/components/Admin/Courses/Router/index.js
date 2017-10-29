import * as React from "react";

import UsersListComponent from '../List';
import CreateUserComponent from '../Create';
import { Route } from 'react-router-dom';

export default class Router extends React.Component {
    render() {
        return [
            <Route exact path="/admin/courses" component={UsersListComponent} />,
            <Route exact path="/admin/courses/create" component={CreateUserComponent} />,
        ];
    }
}
