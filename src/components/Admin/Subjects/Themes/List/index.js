import * as React from "react";

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui-icons/Add';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import DescriptionIcon from 'material-ui-icons/Description';
import Tooltip from 'material-ui/Tooltip';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {getThemes} from "../../../../../services/actions/admin/subjects";
import {CircularProgress} from "../../../../../../node_modules/material-ui/Progress/index";

class List extends React.Component {
    constructor(props) {
        super(props);

        let { dispatch, match: { params } } = this.props;

        dispatch(getThemes(params));
    }

    render() {
        let { themes, waitingForThemes, match: { params: { subject } } } = this.props;
        let rowsWithThemes;

        if (themes.length > 0) {
            rowsWithThemes = themes.map(n => {
                return (
                    <TableRow key={n.id}>
                        <TableCell>{n.title}</TableCell>
                        <TableCell number>{3}</TableCell>
                        <TableCell>
                            <div>
                                <Tooltip title="Список задач" placement="bottom">
                                    <Link to={`/admin/subjects/` + subject + `/themes/` + n.id + `/tasks`}>
                                        <IconButton aria-label="Remove">
                                            <DescriptionIcon />
                                        </IconButton>
                                    </Link>
                                </Tooltip>
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
            rowsWithThemes = (
                <TableRow className="empty-rows">
                    <p>На данний момент в цій темі немає ні одної задачі</p>
                </TableRow>
            );
        }

        return (
            <div>
                <div className="controls">
                    <Tooltip title="Додати нову задачу" placement="bottom">
                        <Link to={`/admin/subjects/` + subject + `/themes/create`}>
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
                                <TableCell>Назва теми</TableCell>
                                <TableCell number>Кількість задач</TableCell>
                                <TableCell />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { (waitingForThemes) ? <CircularProgress thickness={7} /> : rowsWithThemes }
                        </TableBody>
                    </Table>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ adminSubjects }) {
    return {
        themes: adminSubjects.themes,
        waitingForThemes: adminSubjects.waitingForThemes
    }
}

export default connect(mapStateToProps)(List);
