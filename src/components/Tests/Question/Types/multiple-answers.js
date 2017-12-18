import React from 'react';
import FormGroup from "material-ui/es/Form/FormGroup";
import FormControlLabel from "material-ui/es/Form/FormControlLabel";
import Checkbox from "material-ui/es/Checkbox/Checkbox";
import FormControl from "material-ui/es/Form/FormControl";
import FormLabel from "material-ui/es/Form/FormLabel";
import {setAnswer} from "../../../../services/actions/tests";

export class MultipleAnswers extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange(key, _, value) {
        let { question, dispatch, match: { params: { test: testId } } } = this.props;

        const result = question.result || {};
        result[key] = value;

        dispatch(setAnswer(testId, question, result));
    }

    render() {
        let { question } = this.props;

        return (
            <div>
                <FormControl component="fieldset" required>
                    <FormLabel component="legend">Виберіть декілька правильних відповідей</FormLabel>
                    {
                        question.answers.map((answer) => {
                            return (
                                <div>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={(question.result && answer.id in question.result) ? question.result[answer.id] : false}
                                                onChange={this.handleChange.bind(this, answer.id)}
                                                value={answer.id}
                                            />
                                        }
                                        label={answer.content}
                                    />
                                </div>
                            )
                        })
                    }
                </FormControl>
            </div>
        );
    }
}
