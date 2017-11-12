import * as React from "react";

import Paper from "material-ui/Paper";
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import { getCourses } from "../../../../services/actions/courses";

import "./main.css";

class Layout extends React.Component {
    constructor(props) {
        super(props);

        let { dispatch } = this.props;

        dispatch(getCourses());
    }

    render() {
        let data = [
            {id: 1, subject: 'OOP', teacher: 'Гребенович Ю. Є.', group: 'КЕ-12'}
        ];

        let { courses: { courses } } = this.props;

        return (
            <Paper className="layout courses-layout">
                <Table className="courses-list">
                    <TableHead>
                        <TableRow>
                            <TableCell>Предмет</TableCell>
                            <TableCell>Викладач</TableCell>
                            <TableCell>Група</TableCell>
                            <TableCell>Посилання</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {courses.map(n => {
                            return (
                                <TableRow key={n.id} className="item">
                                    <TableCell>{n.subject}</TableCell>
                                    <TableCell>{n.teacher}</TableCell>
                                    <TableCell>{n.group}</TableCell>
                                    <TableCell>
                                        <Link to={`/courses/` + n.id + `/dashboard`} className="link">Перейти</Link>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

function mapStateToProps(state) {
    return {
        courses: state.subjects
    };
}

Layout = connect(mapStateToProps)(Layout);

export default Layout;
