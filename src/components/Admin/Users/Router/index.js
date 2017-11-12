import * as React from "react";

import UsersListComponent from '../List';
import CreateUserComponent from '../Create';
import EditUserComponent from '../Edit';
import { Route } from 'react-router-dom';

export default class Router extends React.Component {
    render() {
        return [
            <Route exact path="/admin/users" component={UsersListComponent} />,
            <Route exact path="/admin/users/create" component={CreateUserComponent} />,
            <Route exact path="/admin/users/:user/edit" component={EditUserComponent} />,
        ];
    }
}
