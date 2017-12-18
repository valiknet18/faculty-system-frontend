import React from 'react';
import List, { ListItem, ListItemText } from "material-ui/List";
import Select from "material-ui/Select";
import { MenuItem } from "material-ui/Menu";
import Input from "material-ui/Input";
import {setAnswer} from "../../../../services/actions/tests";

export class RelatedAnswers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            values: {},
        };
    }

    handleChange(key, event) {
        let { question, dispatch, match: { params: { test } } } = this.props;

        const result = question.result || {};
        result[key] = event.target.value;

        dispatch(setAnswer(test, question, result));
    }

    render() {
        let { question } = this.props;

        return (
            <div className="related-answers">
                <div className="list">
                    {
                        question.questions.map((i) => {
                            return (
                                <div className="item">
                                    <div className="content">{ i.content }</div>

                                    <div className="answers">
                                        <Select
                                            value={(question.result && question.result[i.id]) ? question.result[i.id] : ''}
                                            onChange={this.handleChange.bind(this, i.id)}
                                            input={<Input name="age" id="age-simple" />}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {
                                                question.answers.map((answer) => {
                                                    return (
                                                        <MenuItem value={answer.id}>{ answer.content }</MenuItem>
                                                    )
                                                })
                                            }
                                        </Select>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
