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
import {getLearningSemesters} from "../../../../services/actions/admin/learning-semesters";

export class List extends React.Component {
    constructor(props) {
        super(props);

        let { dispatch } = this.props;

        dispatch(getLearningSemesters());
    }

    render() {
        let { learningSemesters, waitingForLearningSemesters } = this.props;
        let rowsWithLearningSemesters;

        if (learningSemesters.length > 0) {
            rowsWithLearningSemesters = learningSemesters.map(n => {
                return (
                    <TableRow key={n.id}>
                        <TableCell>{n.fromDate}</TableCell>
                        <TableCell>{n.toDate}</TableCell>
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
            rowsWithLearningSemesters = (
                <TableRow className="empty-rows">
                    <p>На данний момент немає ні одної участника</p>
                </TableRow>
            );
        }

        return (
            <div>
                <div className="controls">
                    <Tooltip title="Додати новий курс" placement="bottom">
                        <Link to="/admin/learning-semesters/create">
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
                                <TableCell>Початок</TableCell>
                                <TableCell>Кінець</TableCell>
                                <TableCell />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { (waitingForLearningSemesters) ? <CircularProgress thickness={7} /> : rowsWithLearningSemesters }
                        </TableBody>
                    </Table>
                </div>
            </div>
        );
    }
}


function mapStateToProps({ adminLearningSemesters }) {
    return {
        learningSemesters: adminLearningSemesters.learningSemesters,
        waitingForLearningSemesters: adminLearningSemesters.waitingForLearningSemesters,
    }
}

export default connect(mapStateToProps)(List);
