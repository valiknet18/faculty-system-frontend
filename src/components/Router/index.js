import React from 'react';

import { Switch, Route } from 'react-router-dom'

import SignIn from '../SignIn';
import Courses from '../Courses/List/Layout';
import Course from '../Courses/Item/Layout';

export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/sign-in" component={SignIn} />
                <Route exact path="/courses" component={Courses} />
                <Route path="/courses/course" component={Course} />
            </Switch>
        );
    }
}
