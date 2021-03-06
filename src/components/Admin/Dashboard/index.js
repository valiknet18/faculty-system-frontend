import React from 'react';

import DescriptionIcon from 'material-ui-icons/Description';
import PeopleIcon from 'material-ui-icons/People';
import GroupIcon from 'material-ui-icons/Group';
import LibraryBooksIcon from 'material-ui-icons/LibraryBooks';
import AssignmentIcon from 'material-ui-icons/Assignment';

import { Link } from 'react-router-dom';

import './main.css';

export default class Layout extends React.Component {
    render() {
        return (
            <div className="admin-dashboard">
                <Link to="/admin/users" className="item">
                    <PeopleIcon />
                    <p>Користувачі</p>
                </Link>
                <Link to="/admin/subjects" className="item">
                    <div>
                        <LibraryBooksIcon />
                    </div>
                    <p>Предмети</p>
                </Link>
                <Link to="/admin/groups" className="item">
                    <div>
                        <GroupIcon />
                    </div>
                    <p>Групи</p>
                </Link>
                <Link to="/admin/courses" className="item">
                    <div>
                        <DescriptionIcon />
                    </div>
                    <p>Курси</p>
                </Link>
                <Link to="/admin/learning-semesters" className="item">
                    <div>
                        <AssignmentIcon />
                    </div>
                    <p>Навчальні семестри</p>
                </Link>
            </div>
        )
    }
}
