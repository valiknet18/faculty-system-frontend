import * as React from "react";

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui-icons/Add';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import DescriptionIcon from 'material-ui-icons/Description';
import Tooltip from 'material-ui/Tooltip';

import './main.css';
import {connect} from "react-redux";
import {getTasks} from "../../../../../../services/actions/admin/subjects";

export class Layout extends React.Component {
    constructor(props) {
        super(props);

        let { dispatch, match: { params: { subject, theme } } } = props;

        dispatch(getTasks(subject, theme));
    }

    render() {
        let { tasks } = this.props;
        let rowsWithTasks;

        if (tasks.length > 0) {
            rowsWithTasks = tasks.map(n => {
                return (
                    <TableRow key={n.id}>
                        <TableCell>{n.title}</TableCell>
                        <TableCell>{n.content}</TableCell>
                        <TableCell>
                            <div>
                                <Tooltip title="Редагувати задачу" placement="bottom">
                                    <IconButton aria-label="Edit">
                                        <EditIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Видалити задачу" placement="bottom">
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
            rowsWithTasks = (
                <TableRow className="empty-rows">
                    <p>На данний момент в цій темі немає ні одної задачі</p>
                </TableRow>
            );
        }

        return (
            <div>
                <div className="controls">
                    <Tooltip title="Додати нову задачу" placement="bottom">
                        <IconButton aria-label="Add">
                            <AddIcon />
                        </IconButton>
                    </Tooltip>
                </div>
                <div className="datatable">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Назва задачі</TableCell>
                                <TableCell>Опич задачі</TableCell>
                                <TableCell />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { rowsWithTasks }
                        </TableBody>
                    </Table>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ adminSubjects }) {
    return {
        tasks: adminSubjects.tasks
    }
}

export default connect(mapStateToProps)(Layout);
