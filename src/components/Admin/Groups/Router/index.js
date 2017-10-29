import * as React from "react";

import GroupsListComponent from '../List';
import CreateGroupComponent from '../Create';
import { Route } from 'react-router-dom';

export default class Router extends React.Component {
    render() {
        return [
            <Route exact path="/admin/groups" component={GroupsListComponent} />,
            <Route exact path="/admin/groups/create" component={CreateGroupComponent} />,
        ];
    }
}
