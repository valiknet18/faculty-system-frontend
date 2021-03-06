import * as React from "react";

import SubjectsListComponent from '../List';
import CreateSubjectComponent from '../Create';
import ThemesListComponent from '../Themes/List';
import TestsListComponent from '../Tests/List';
import QuestionsListComponent from '../Tests/Questions/List';
import CreateThemeComponent from '../Themes/Create';
import TasksListComponent from '../Themes/Tasks/Layout';
import CreateTaskComponent from '../Themes/Tasks/Create';
import { Route } from 'react-router-dom';

export default class Router extends React.Component {
    render() {
        return [
            <Route exact path="/admin/subjects" component={SubjectsListComponent} />,
            <Route exact path="/admin/subjects/create" component={CreateSubjectComponent} />,
            <Route exact path="/admin/subjects/:subject/themes" component={ThemesListComponent} />,
            <Route exact path="/admin/subjects/:subject/tests" component={TestsListComponent} />,
            <Route exact path="/admin/subjects/:subject/tests/:test/questions" component={QuestionsListComponent} />,
            <Route exact path="/admin/subjects/:subject/themes/create" component={CreateThemeComponent} />,
            <Route exact path="/admin/subjects/:subject/themes/:theme/tasks" component={TasksListComponent} />,
            <Route path="/admin/subjects/:subject/themes/:theme/tasks/create" component={CreateTaskComponent} />,
        ];
    }
}
