import React from 'react';

import Paper from 'material-ui/Paper';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import SettingsIcon from 'material-ui-icons/Settings';
import PersonIcon from 'material-ui-icons/Person';
import PieChartIcon from 'material-ui-icons/PieChart';
import LibraryBooksIcon from 'material-ui-icons/LibraryBooks';

import Dashboard from '../Dashboard';

import './main.css';

export default class Layout extends React.Component {
    render() {
        return [
            <Paper className="profile-layout">
                <Dashboard/>
            </Paper>,
            <BottomNavigation
                value="hello"
                showLabels
                className="admin-bottom-navigation"
            >
                <BottomNavigationButton label="Дошка" icon={<LibraryBooksIcon />} />
                <BottomNavigationButton label="Аналітіка" icon={<PieChartIcon />} />
                <BottomNavigationButton label="Студенти" icon={<PersonIcon />} />
                <BottomNavigationButton label="Налаштування" icon={<SettingsIcon />} />
            </BottomNavigation>
        ];
    }
}
