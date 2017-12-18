import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "material-ui";
import { setAnswer } from "../../../../services/actions/tests";

export class SingleAnswer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange(_, value) {
        let { question, dispatch, match: { params: { test } } } = this.props;

        dispatch(setAnswer(test, question, value));
    }

    render() {
        let { question } = this.props;

        return (
            <div>
                <FormControl component="fieldset" required>
                    <FormLabel component="legend">Виберіть одну правильну відповідь</FormLabel>
                    <RadioGroup
                        aria-label="gender"
                        name="answer"
                        value={+question.result}
                        onChange={this.handleChange.bind(this)}
                    >
                        {
                            question.answers.map((answer) => {
                                return <FormControlLabel value={answer.id} control={<Radio />} label={answer.content} />
                            })
                        }
                    </RadioGroup>
                </FormControl>
            </div>
        );
    }
}
