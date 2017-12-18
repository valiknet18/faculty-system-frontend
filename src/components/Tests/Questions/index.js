import React from 'react';
import {List, ListItem, ListItemText} from "material-ui";
import Link from "react-router-dom/Link";

import './main.css';
import {getQuestion} from "../../../services/actions/tests";

export default class Questions extends React.Component {
    onChangeQuestion(question) {
        let { dispatch, history, match: { params: { test } } } = this.props;

        dispatch(getQuestion(test, question));

        history.push(`/tests/${test}/questions/${question}`);
    }

    render() {
        let { questions } = this.props;

        return (
            <div className="questions-wrapper">
                <ul className="list">
                    {
                        questions.map((question) => {
                            const isDisabled = (question.result) ? `disabled` : ``;

                            return (
                                <li className={`item ` + isDisabled}>
                                    <a onClick={this.onChangeQuestion.bind(this, question.id)}>{question.title}</a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}
