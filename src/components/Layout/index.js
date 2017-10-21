import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Menu from '../Menu';

import Router from '../Router';

import './main.css';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { loadUser } from '../../services/actions/auth';

function mapStateToProps(state) {
    return {
        profile: state.auth
    };
}

class Layout extends React.Component {
    constructor(props) {
        super(props);

        let { dispatch } = this.props;

        dispatch(loadUser());
    }

    render() {
        let { profile: { profile } } = this.props;

        let isAuthClass = (profile) ? 'is-auth' : '';

        return (
            <div>
                <div className='main-layout'>
                    <AppBar className={ `app-bar ${isAuthClass}`}>
                        <Toolbar>
                            <Typography type="title" color="inherit" noWrap>
                                Навчальний центр факультету ОТІУС
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    {
                        (profile) ? <Menu {...this.props} /> : ''
                    }
                    <main className={`content ${isAuthClass}`}>
                        <Router auth={profile} />
                    </main>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Layout));
