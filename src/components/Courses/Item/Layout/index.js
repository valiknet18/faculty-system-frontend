import React from 'react';

import Paper from 'material-ui/Paper';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import SettingsIcon from 'material-ui-icons/Settings';
import PersonIcon from 'material-ui-icons/Person';
import PieChartIcon from 'material-ui-icons/PieChart';
import LibraryBooksIcon from 'material-ui-icons/LibraryBooks';

import Router from '../Router';

import './main.css';

export default class Layout extends React.Component {
    handleChange(event, value) {
        let { match: { params } } = this.props;

        this.props.history.push(
            `/courses/${params.course}/` + value
        );
    }

    render() {
        return [
            <Paper className="layout profile-layout">
                <Router />
            </Paper>,
            <BottomNavigation
                value="hello"
                showLabels
                className="admin-bottom-navigation"
                onChange={this.handleChange.bind(this)}
            >
                <BottomNavigationButton label="Дошка" value="dashboard" icon={<LibraryBooksIcon />} />
                {/*<BottomNavigationButton label="Аналітіка" value="analytics" icon={<PieChartIcon />} />*/}
                <BottomNavigationButton label="Студенти" value="students" icon={<PersonIcon />} />
                <BottomNavigationButton label="Налаштування" value="settings" icon={<SettingsIcon />} />
            </BottomNavigation>
        ];
    }
}
