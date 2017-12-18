import React from 'react';
import Loader from '../Loader';
import Question from '../Question';
import Questions from '../Questions/index';
import Button from 'material-ui/Button';
import {getQuestion, completeTest, getTest} from "../../../services/actions/tests";
import { connect } from "react-redux";

import './main.css';

class Process extends React.Component {
    constructor(props) {
        super(props);

        let { dispatch, match: { params: { test, question } } } = this.props;

        dispatch(getTest(test));
        dispatch(getQuestion(test, question));
    }

    completeTest() {
        let { test: { questions }, dispatch, match: { params: { test } } } = this.props;

        dispatch(completeTest(test, questions));
    }

    nextQuestion() {
        let { history, dispatch, nextQuestion, match: { params: { test } } } = this.props;

        dispatch(getQuestion(test, nextQuestion.id));

        history.push(`/tests/${test}/questions/${nextQuestion.id}`);
    }

    render() {
        let { test, question } = this.props;

        return (
            <div className="tests-process-wrapper">
                <div>
                    {
                        test && <Loader test={test} />
                    }
                </div>
                <div className="body">
                    <div className="question">
                    {
                        question && <Question question={question} {...this.props} />
                    }
                    </div>
                    {
                        test && <div className="questions">
                            <Questions questions={test.questions} {...this.props} />
                        </div>
                    }
                </div>
                <div className="controls">
                    <Button raised
                            color="primary"
                            className="complete"
                            onClick={this.completeTest.bind(this)}>
                        Завершити
                    </Button>
                    <Button raised
                            color="primary"
                            className="next"
                            onClick={this.nextQuestion.bind(this)}>
                        Наступне запитання
                    </Button>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ tests: { test, question, nextQuestion }}) {
    return {
        test: test,
        question: question,
        nextQuestion: nextQuestion,
    };
}

export default connect(mapStateToProps)(Process);
