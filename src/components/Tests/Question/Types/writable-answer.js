import React from 'react';
import TextField from "material-ui/TextField";
import {setAnswer} from "../../../../services/actions/tests";

export class WritableAnswer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange(event) {
        let { question, dispatch, match: { params: { test } } } = this.props;

        dispatch(setAnswer(test, question, event.target.value));
    }

    render() {
        let { question } = this.props;

        return (
            <div>
                <form noValidate autoComplete="off">
                    <TextField
                        id="name"
                        label="Name"
                        value={question.result}
                        onChange={this.handleChange.bind(this)}
                        margin="normal"
                    />
                </form>
            </div>
        );
    }
}
