import * as React from "react";

import Paper from "material-ui/Paper";
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import {Link} from 'react-router-dom';

import "./main.css";

export default class Layout extends React.Component {
    render() {
        let data = [
            {id: 1, subject: 'OOP', teacher: 'Гребенович Ю. Є.', group: 'КЕ-12'}
        ];

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
                        {data.map(n => {
                            return (
                                <TableRow key={n.id} className="item">
                                    <TableCell>{n.subject}</TableCell>
                                    <TableCell>{n.teacher}</TableCell>
                                    <TableCell>{n.group}</TableCell>
                                    <TableCell>
                                        <Link to="/courses/course/dashboard" className="link">Перейти</Link>
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
