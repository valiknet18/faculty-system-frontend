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
import {getGroups} from "../../../../services/actions/admin/groups";

export class List extends React.Component {
    constructor(props) {
        super(props);

        let { dispatch } = this.props;

        dispatch(getGroups());
    }

    render() {
        let { groups, waitingForGroups  } = this.props;
        let rowsWithGroups;

        console.log(groups);

        if (groups.length > 0) {
            rowsWithGroups = groups.map(n => {
                return (
                    <TableRow key={n.id}>
                        <TableCell>{n.name}</TableCell>
                        <TableCell number>{1}</TableCell>
                        <TableCell>
                            <div>
                                <Tooltip title="Редагувати групу" placement="bottom">
                                    <IconButton aria-label="Edit">
                                        <EditIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Видалити групу" placement="bottom">
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
            rowsWithGroups = (
                <TableRow className="empty-rows">
                    <p>На данний момент немає ні одної групи</p>
                </TableRow>
            );
        }

        return (
            <div>
                <div className="controls">
                    <Tooltip title="Додати нову групу" placement="bottom">
                        <Link to="/admin/groups/create">
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
                                <TableCell>Назва групи</TableCell>
                                <TableCell number>Кількість студентів</TableCell>
                                <TableCell />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { (waitingForGroups) ? <CircularProgress thickness={7} /> : rowsWithGroups }
                        </TableBody>
                    </Table>
                </div>
            </div>
        );
    }
}


function mapStateToProps({ adminGroups }) {
    return {
        groups: adminGroups.groups,
        waitingForGroups: adminGroups.waitingForGroups,
    }
}

export default connect(mapStateToProps)(List);
