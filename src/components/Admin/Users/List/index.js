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

export class List extends React.Component {
    constructor(props) {
        super(props);

        let { dispatch } = this.props;

        dispatch(getUsers());
    }

    render() {
        let { users, waitingForUsers  } = this.props;
        let rowsWithUsers;

        if (users.length > 0) {
            rowsWithUsers = users.map(n => {
                return (
                    <TableRow key={n.id}>
                        <TableCell>{n.last_name + ' ' + n.first_name}</TableCell>
                        <TableCell>{n.email}</TableCell>
                        <TableCell>{n.role}</TableCell>
                        <TableCell>
                            <div>
                                <Tooltip title="Редагувати участника" placement="bottom">
                                    <Link to={`/admin/users/${n.id}/edit`}>
                                        <IconButton aria-label="Edit">
                                            <EditIcon />
                                        </IconButton>
                                    </Link>
                                </Tooltip>
                                <Tooltip title="Видалити участника" placement="bottom">
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
            rowsWithUsers = (
                <TableRow className="empty-rows">
                    <p>На данний момент немає ні одної участника</p>
                </TableRow>
            );
        }

        return (
            <div>
                <div className="controls">
                    <Tooltip title="Додати нового участника" placement="bottom">
                        <Link to="/admin/users/create">
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
                                <TableCell>Прізвище Ім'я та По-батькові</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Роль</TableCell>
                                <TableCell />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { (waitingForUsers) ? <CircularProgress thickness={7} /> : rowsWithUsers }
                        </TableBody>
                    </Table>
                </div>
            </div>
        );
    }
}


function mapStateToProps({ adminUsers }) {
    return {
        users: adminUsers.users,
        waitingForUsers: adminUsers.waitingForUsers,
    }
}

export default connect(mapStateToProps)(List);
