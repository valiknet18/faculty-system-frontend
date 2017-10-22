import * as React from "react";

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui-icons/Add';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import DescriptionIcon from 'material-ui-icons/Description';
import Tooltip from 'material-ui/Tooltip';

import './main.css';

export default class Layout extends React.Component {
    render() {
        let subjects = [
            {
                id: 1,
                themesCount: 1,
                tasksCount: 1,
                name: 'Hello'
            },
            {
                id: 2,
                themesCount: 2,
                tasksCount: 2,
                name: 'Hello 2'
            },
        ];

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
                                <TableCell>Опич задачі</TableCell>
                                <TableCell />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {subjects.map(n => {
                                return (
                                    <TableRow key={n.id}>
                                        <TableCell>{n.name}</TableCell>
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
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        );
    }
}
