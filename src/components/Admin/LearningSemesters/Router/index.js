import * as React from "react";

import LearningSemestersListComponent from '../List';
import CreateLearningSemesterComponent from '../Create';
import { Route } from 'react-router-dom';

export default class Router extends React.Component {
    render() {
        return [
            <Route exact path="/admin/learning-semesters" component={LearningSemestersListComponent} />,
            <Route exact path="/admin/learning-semesters/create" component={CreateLearningSemesterComponent} />,
        ];
    }
}
