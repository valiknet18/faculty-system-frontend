import React from "react";
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui-icons/Add';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import DescriptionIcon from 'material-ui-icons/Description';
import AssessmentIcon from 'material-ui-icons/Assessment';
import Tooltip from 'material-ui/Tooltip';
import { Link } from 'react-router-dom';
import { getSubjects } from '../../../../services/actions/admin/subjects'
import { connect } from 'react-redux';
import { CircularProgress } from '../../../../../node_modules/material-ui/Progress/index';

export class List extends React.Component {
    constructor(props) {
        super(props);

        let { dispatch } = this.props;

        dispatch(getSubjects());
    }

    render() {
        let { subjects, waitingForSubjects  } = this.props;
        let rowsWithSubjects;

        if (subjects.length > 0) {
            rowsWithSubjects = subjects.map(n => {
                return (
                    <TableRow key={n.id}>
                        <TableCell>{n.name}</TableCell>
                        <TableCell number>{1}</TableCell>
                        <TableCell number>{1}</TableCell>
                        <TableCell>
                            <div>
                                <Tooltip title="Список тестів" placement="bottom">
                                    <Link to={`/admin/subjects/` + n.id + `/tests`}>
                                        <IconButton aria-label="Link">
                                            <AssessmentIcon />
                                        </IconButton>
                                    </Link>
                                </Tooltip>
                                <Tooltip title="Список тем" placement="bottom">
                                    <Link to={`/admin/subjects/` + n.id + `/themes`}>
                                        <IconButton aria-label="Link">
                                            <DescriptionIcon />
                                        </IconButton>
                                    </Link>
                                </Tooltip>
                                <Tooltip title="Редагувати предмет" placement="bottom">
                                    <IconButton aria-label="Edit">
                                        <EditIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Видалити предмет" placement="bottom">
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
            rowsWithSubjects = (
                <TableRow className="empty-rows">
                    <p>На данний момент в цій темі немає ні одної задачі</p>
                </TableRow>
            );
        }

        return (
            <div>
                <div className="controls">
                    <Tooltip title="Додати новий предмет" placement="bottom">
                        <Link to="/admin/subjects/create">
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
                                <TableCell>Назва предмету</TableCell>
                                <TableCell number>Кількість тем</TableCell>
                                <TableCell number>Кількість задач</TableCell>
                                <TableCell />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { (waitingForSubjects) ? <CircularProgress thickness={7} /> : rowsWithSubjects }
                        </TableBody>
                    </Table>
                </div>
            </div>
        );
    }
}


function mapStateToProps({ adminSubjects }) {
    return {
        subjects: adminSubjects.subjects,
        waitingForSubjects: adminSubjects.waitingForSubjects,
    }
}

export default connect(mapStateToProps)(List);
