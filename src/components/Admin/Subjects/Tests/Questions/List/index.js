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
import {getQuestions} from "../../../../../../services/actions/admin/questions";

class List extends React.Component {
    constructor(props) {
        super(props);

        let { dispatch, match: { params: { subject, test } } } = this.props;

        dispatch(getQuestions(subject, test));
    }

    render() {
        let { questions, match: { params: { subject, test } } } = this.props;
        let rowsWithQuestions;

        if (questions.length > 0) {
            rowsWithQuestions = questions.map(n => {
                return (
                    <TableRow key={n.id}>
                        <TableCell>{n.title}</TableCell>
                        <TableCell>{n.content}</TableCell>
                        <TableCell number>{n.type}</TableCell>
                        <TableCell>
                            <div>
                                <Tooltip title="Редагувати запитання" placement="bottom">
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
            rowsWithQuestions = (
                <TableRow className="empty-rows">
                    <p>На данний момент в цій темі немає ні одного запитання</p>
                </TableRow>
            );
        }

        return (
            <div>
                <div className="controls">
                    <Tooltip title="Додати нове запитання" placement="bottom">
                        <Link to={`/admin/subjects/` + subject + `/tests/` + test  + `/questions/create`}>
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
                                <TableCell>Назва запитання</TableCell>
                                <TableCell>Опис запитання</TableCell>
                                <TableCell number>Тип запитання</TableCell>
                                <TableCell />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { rowsWithQuestions }
                            {/*{ (waitingForThemes) ? <CircularProgress thickness={7} /> : rowsWithQuestions }*/}
                        </TableBody>
                    </Table>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ adminQuestions }) {
    return {
        questions: adminQuestions.questions,
    }
}

export default connect(mapStateToProps)(List);
