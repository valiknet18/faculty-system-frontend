import * as React from "react";

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui-icons/Add';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import Tooltip from 'material-ui/Tooltip';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {CircularProgress} from "../../../../../node_modules/material-ui/Progress/index";
import {getUsers} from "../../../../services/actions/admin/users";
import {getCourses} from "../../../../services/actions/admin/courses";

export class List extends React.Component {
    constructor(props) {
        super(props);

        let { dispatch } = this.props;

        dispatch(getCourses());
    }

    render() {
        let { courses, waitingForCourses  } = this.props;
        let rowsWithCourses;

        if (courses.length > 0) {
            rowsWithCourses = courses.map(n => {
                return (
                    <TableRow key={n.course_id}>
                        <TableCell>{n.subject.name}</TableCell>
                        <TableCell>{n.group.name}</TableCell>
                        <TableCell>{n.teacher.firstName} {n.teacher.lastName}</TableCell>
                        <TableCell>
                            <div>
                                <Tooltip title="Редагувати курс" placement="bottom">
                                    <IconButton aria-label="Edit">
                                        <EditIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Видалити курс" placement="bottom">
                                    <IconButton aria-label="Remove">
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </TableCell>
                    </TableRow>
                );
            })
        } else {
            rowsWithCourses = (
                <TableRow className="empty-rows">
                    <p>На данний момент немає ні одної участника</p>
                </TableRow>
            );
        }

        return (
            <div>
                <div className="controls">
                    <Tooltip title="Додати новий курс" placement="bottom">
                        <Link to="/admin/courses/create">
                            <IconButton aria-label="Add">
                                <AddIcon />
                            </IconButton>
                        </Link>
                    </Tooltip>
                </div>
                <div className="datatable">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Предмет</TableCell>
                                <TableCell>Група</TableCell>
                                <TableCell>Викладач</TableCell>
                                <TableCell />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { (waitingForCourses) ? <CircularProgress thickness={7} /> : rowsWithCourses }
                        </TableBody>
                    </Table>
                </div>
            </div>
        );
    }
}


function mapStateToProps({ adminCourses }) {
    return {
        courses: adminCourses.courses,
        waitingForCourses: adminCourses.waitingForCourses,
    }
}

export default connect(mapStateToProps)(List);
