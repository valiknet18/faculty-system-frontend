import React from 'react';

import Paper from 'material-ui/Paper';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';

import Dashboard from '../../Courses/Item/Dashboard/Table/index';

import './main.css';

export default class Layout extends React.Component {
    render() {
        return [
            <Paper className="admin-layout">
                <Dashboard/>
            </Paper>,
            <BottomNavigation
                value="hello"
                showLabels
                className="admin-bottom-navigation"
            >
                <BottomNavigationButton label="Дошка" icon={<RestoreIcon />} />
                <BottomNavigationButton label="Аналітіка" icon={<FavoriteIcon />} />
                <BottomNavigationButton label="Студенти" icon={<FavoriteIcon />} />
                <BottomNavigationButton label="Налаштування" icon={<FavoriteIcon />} />
            </BottomNavigation>
        ];
    }
}
