import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import ExitToApp from 'material-ui-icons/ExitToApp';
import Settings from 'material-ui-icons/Settings';
import AccountBoxIcon from 'material-ui-icons/AccountBox';
import Avatar from 'material-ui/Avatar';

import {Link} from 'react-router-dom'

import './main.css';

export default class Menu extends React.Component {
    render() {
        return [
            <div className="profile-area">
                <div className="avatar">
                    <Avatar src="https://ict4kids.files.wordpress.com/2013/05/mrc-2.png" />
                </div>
                <span className="full-name">Гриневич Валентин (студент)</span>
            </div>,
            <List className="upper-menu-links">
                <ListItem button>
                    <ListItemIcon>
                        <AccountBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Профайл" />
                </ListItem>
                <ListItem button component={Link} to="/courses">
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Предмети" />
                </ListItem>
            </List>,
            <List className="lower-menu-links">
                <ListItem button>
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    <ListItemText primary="Налаштування" />
                </ListItem>
                <ListItem button component={Link} to="/sign-in">
                    <ListItemIcon>
                        <ExitToApp />
                    </ListItemIcon>
                    <ListItemText primary="Вихід" />
                </ListItem>
            </List>
        ];
    }
}
