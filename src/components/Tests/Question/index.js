import React from 'react';
import { MULTIPLE_ANSWERS, RELATED_ANSWERS, SINGLE_ANSWER, WRITABLE_ANSWER } from '../../../services/constants/tests';
import { MultipleAnswers, SingleAnswer, WritableAnswer, RelatedAnswers } from './Types';

import './main.css';

export default class Question extends React.Component {
    getAnswersComponent(question) {
        switch (question.type) {
            case SINGLE_ANSWER:
                return <SingleAnswer question={question} {...this.props} />;

            case MULTIPLE_ANSWERS:
                return <MultipleAnswers question={question} {...this.props} />;

            case WRITABLE_ANSWER:
                return <WritableAnswer question={question} {...this.props} />;

            case RELATED_ANSWERS:
                return <RelatedAnswers question={question} {...this.props} />;
        }
    }

    render() {
        let { question } = this.props;

        return (
            <div className="question-wrapper">
                <div className="question-header">
                    <h1>{ question.title }</h1>
                    <p>{ question.content }</p>
                </div>
                <div className="question-body">
                    <div>
                        { this.getAnswersComponent(question) }
                    </div>
                </div>
            </div>
        );
    }
}
