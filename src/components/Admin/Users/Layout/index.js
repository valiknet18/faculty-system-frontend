import * as React from "react";

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui-icons/Add';
import Tooltip from 'material-ui/Tooltip';

export default class Layout extends React.Component {
    render() {
        let data = [];

        return (
            <div>
                <div className="controls">
                    <Tooltip title="Додати нового учасника" placement="bottom">
                        <IconButton aria-label="Delete">
                            <AddIcon />
                        </IconButton>
                    </Tooltip>
                </div>
                <div className="datatable">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell numeric>Calories</TableCell>
                                <TableCell numeric>Fat (g)</TableCell>
                                <TableCell numeric>Carbs (g)</TableCell>
                                <TableCell numeric>Protein (g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map(n => {
                                return (
                                    <TableRow key={n.id}>
                                        <TableCell>{n.name}</TableCell>
                                        <TableCell numeric>{n.calories}</TableCell>
                                        <TableCell numeric>{n.fat}</TableCell>
                                        <TableCell numeric>{n.carbs}</TableCell>
                                        <TableCell numeric>{n.protein}</TableCell>
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
