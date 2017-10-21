import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Menu from '../Menu';

import Router from '../Router';
import CoursesLayout from '../Courses/Item/Layout';

import './main.css';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuth: true,
        }
    }

    render() {
        let { isAuth } = this.state;

        let isAuthClass = (isAuth) ? 'is-auth' : '';

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
                        (isAuth) ?
                            <Drawer
                                type="permanent"
                                classes={{
                                    paper: 'drawer',
                                }}
                            >
                                <Menu/>
                            </Drawer>
                        : ''
                    }
                    <main className={`content ${isAuthClass}`}>
                        <Router/>
                    </main>
                </div>
            </div>
        );
    }
}
