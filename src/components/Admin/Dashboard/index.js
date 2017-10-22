import React from 'react';

import DescriptionIcon from 'material-ui-icons/Description';
import PeopleIcon from 'material-ui-icons/People';
import LibraryBooksIcon from 'material-ui-icons/LibraryBooks';

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
                        <LibraryBooksIcon/>
                    </div>
                    <p>Предмети</p>
                </Link>
                <Link to="/admin/courses" className="item">
                    <div>
                        <DescriptionIcon/>
                    </div>
                    <p>Курси</p>
                </Link>
            </div>
        )
    }
}
