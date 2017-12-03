import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, profile, ...rest }) => {
    if (profile.waitingForSignInUser){
        // todo mb loader
        return null;
    }

    return (<Route {...rest} render={props => (
        profile.profile ? (
            <Component {...props}/>
        ) : (
            <Redirect to="/sign-in" />
        )
    )}/>);
};

export default connect(store => ({
    profile: store.auth
}))(PrivateRoute);
