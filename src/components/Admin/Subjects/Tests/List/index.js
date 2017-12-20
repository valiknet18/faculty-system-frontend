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
import {getTests} from "../../../../../services/actions/admin/tests";

class List extends React.Component {
    constructor(props) {
        super(props);

        let { dispatch, match: { params: { subject } } } = this.props;

        dispatch(getTests(subject));
    }

    render() {
        let { tests, match: { params: { subject } } } = this.props;
        let rowsWithTests;

        if (tests.length > 0) {
            rowsWithTests = tests.map(n => {
                return (
                    <TableRow key={n.id}>
                        <TableCell>{n.title}</TableCell>
                        <TableCell>{n.content}</TableCell>
                        <TableCell number>{3}</TableCell>
                        <TableCell>
                            <div>
                                <Tooltip title="Список запитань" placement="bottom">
                                    <Link to={`/admin/subjects/` + subject + `/tests/` + n.id + `/questions`}>
                                        <IconButton aria-label="Remove">
                                            <DescriptionIcon />
                                        </IconButton>
                                    </Link>
                                </Tooltip>
                                <Tooltip title="Редагувати тест" placement="bottom">
                                    <IconButton aria-label="Edit">
                                        <EditIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </TableCell>
                    </TableRow>
                );
            })
        } else {
            rowsWithTests = (
                <TableRow className="empty-rows">
                    <p>На данний момент в цій темі немає ні одного тесту</p>
                </TableRow>
            );
        }

        return (
            <div>
                <div className="controls">
                    <Tooltip title="Додати новий тест" placement="bottom">
                        <Link to={`/admin/subjects/` + subject + `/tests/create`}>
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
                                <TableCell>Назва тесту</TableCell>
                                <TableCell>Опис тесту</TableCell>
                                <TableCell number>Кількість запитань</TableCell>
                                <TableCell />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { rowsWithTests }
                            {/*{ (waitingForThemes) ? <CircularProgress thickness={7} /> : rowsWithTests }*/}
                        </TableBody>
                    </Table>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ adminTests }) {
    return {
        tests: adminTests.tests,
    }
}

export default connect(mapStateToProps)(List);
