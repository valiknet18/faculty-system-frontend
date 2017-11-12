import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom'

import SignIn from '../SignIn';
import SignUp from '../SignUp';
import Logout from '../Logout';
import Admin from '../Admin/Layout';
import Courses from '../Courses/List/Layout';
import Course from '../Courses/Item/Layout';
import Profile from '../Account/Profile/Layout';
import Settings from '../Account/Settings/Layout';

export default class Router extends React.Component {
    render() {
        let { auth } = this.props;

        return (
            <Switch>
                <Route exact path="/sign-up/:token" component={SignUp} />
                <Route exact path="/sign-in" component={SignIn} />
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/courses" component={Courses} />
                <Route path="/courses/:course" component={Course} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/profile/settings" component={Settings} />
                <Route path="/admin" component={Admin} />
                { (auth === -1) ? <Redirect to={{pathname: '/sign-in', state: { from: this.props.location }}} /> : '' }
            </Switch>
        );
    }
}
