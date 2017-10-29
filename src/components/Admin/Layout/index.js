import React from 'react';

import Paper from 'material-ui/Paper';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import DescriptionIcon from 'material-ui-icons/Description';
import PeopleIcon from 'material-ui-icons/People';
import LibraryBooksIcon from 'material-ui-icons/LibraryBooks';
import GroupIcon from 'material-ui-icons/Group';
import Router from '../Router';
import Snackbars from '../Snackbars';

import './main.css';

export default class Layout extends React.Component {
    handleChange(event, value) {
        this.props.history.push(
            this.props.match.path + "/" + value
        );
    }

    render() {
        return [
            <Paper className="layout admin-layout">
                <Router />
            </Paper>,
            <BottomNavigation
                value="hello"
                showLabels
                className="admin-bottom-navigation"
                onChange={this.handleChange.bind(this)}
            >
                <BottomNavigationButton label="Користувачі" value="users" icon={<PeopleIcon />} />
                <BottomNavigationButton label="Групи" value="groups" icon={<GroupIcon />} />
                <BottomNavigationButton label="Предмети" value="subjects" icon={<LibraryBooksIcon />} />
                <BottomNavigationButton label="Курси" value="courses" icon={<DescriptionIcon />} />
            </BottomNavigation>,
            <Snackbars />
        ];
    }
}
