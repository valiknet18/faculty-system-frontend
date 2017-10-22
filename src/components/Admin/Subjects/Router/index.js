import * as React from "react";

import List from '../List';
import Create from '../Create';
import Themes from '../Themes/Layout';
import Tasks from '../Themes/Tasks/Layout';
import { Route } from 'react-router-dom';

export default class Router extends React.Component {
    render() {
        return [
            <Route exact path="/admin/subjects" component={List} />,
            <Route exact path="/admin/subjects/create" component={Create} />,
            <Route exact path="/admin/subjects/subject/themes" component={Themes} />,
            <Route path="/admin/subjects/subject/themes/theme/tasks" component={Tasks} />,
        ];
    }
}
