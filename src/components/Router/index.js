import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import SignIn from '../SignIn';
import PrivateRoute from './PrivateRouter';
import SignUp from '../SignUp';
import Logout from '../Logout';
import Admin from '../Admin/Layout';
import Courses from '../Courses/List/Layout';
import Course from '../Courses/Item/Layout';
import Profile from '../Account/Profile/Layout';
import Settings from '../Account/Settings/Layout';

const Router = () => (
    <Switch>
        <Route exact path="/sign-in" component={SignIn} />
        <PrivateRoute exact path="/" component={() => <Redirect to="/profile" />} />
        <PrivateRoute exact path="/sign-up/:token" component={SignUp} />
        <PrivateRoute exact path="/logout" component={Logout} />
        <PrivateRoute exact path="/courses" component={Courses} />
        <PrivateRoute path="/courses/:course" component={Course} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/profile/settings" component={Settings} />
        <PrivateRoute path="/admin" component={Admin} />
    </Switch>
);

export default Router;