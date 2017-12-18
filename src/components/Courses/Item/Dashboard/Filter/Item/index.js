import * as React from "react";

import { FormControl } from "material-ui/Form";
import { InputLabel } from "material-ui/Input";
import Input from "material-ui/Input";
import Select from "material-ui/Select";
import { MenuItem } from "material-ui/Menu";

export default class FilterItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: []
        }
    }

    handleChange(event) {
        this.setState({ name: event.target.values });
    }

    render() {
        let { label, items } = this.props;

        return (
            <FormControl className="filter-select">
                <InputLabel htmlFor="student">{ label }</InputLabel>
                <Select
                    value={this.state.name}
                    multiple
                    input={<Input id="student" />}
                    onChange={this.handleChange.bind(this)}
                    className="student-select"
                >
                    {
                        items.map((item) => {
                            return <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
        );
    }
}
