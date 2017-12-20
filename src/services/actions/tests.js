import Crypto from '../utils/crypto';
import {
    GET_QUESTION, GET_TEST, MULTIPLE_ANSWERS, RELATED_ANSWERS, SET_QUESTION, SET_TIME_LEFT, SINGLE_ANSWER,
    WRITABLE_ANSWER
} from '../constants/tests';
import { push } from 'react-router-redux'

export function startTest() {
    return async (dispatch) => {
        let test = {
            id: 1,
            total: 1000,
            left: 0,
            questions: [
                {
                    id: 1,
                    type: SINGLE_ANSWER,
                    title: 'Test 1',
                    content: 'Hello world',
                    answers: [
                        {
                            id: 1,
                            content: 'Answer 1',
                        },
                        {
                            id: 2,
                            content: 'Answer 1',
                        },
                        {
                            id: 3,
                            content: 'Answer 3',
                        },
                    ]
                },
                {
                    id: 2,
                    type: MULTIPLE_ANSWERS,
                    title: 'Test 2',
                    content: 'Hello world 2',
                    answers: [
                        {
                            id: 1,
                            content: 'Answer 1.1',
                        },
                        {
                            id: 2,
                            content: 'Answer 1.2',
                        },
                        {
                            id: 3,
                            content: 'Answer 3.3',
                        },
                    ]
                },
                {
                    id: 3,
                    type: WRITABLE_ANSWER,
                    title: 'Test 3',
                    content: 'Hello world 2',
                },
                {
                    id: 4,
                    type: RELATED_ANSWERS,
                    title: 'Test 4',
                    content: 'Hello world 2',
                    questions: [
                        {
                            id: 1,
                            content: 'Hello world',
                        },
                        {
                            id: 2,
                            content: 'Hello world 2',
                        },
                        {
                            id: 3,
                            content: 'Hello world 3',
                        },
                    ],
                    answers: [
                        {
                            id: 1,
                            content: 'Answer 1',
                        },
                        {
                            id: 2,
                            content: 'Answer 2',
                        },
                        {
                            id: 3,
                            content: 'Answer 3',
                        },
                    ]
                },
            ],
        };

        dispatch(push(`/tests/1/questions/1`));

        Crypto.encrypt(test);

        dispatch({
            type: GET_TEST,
            test: test,
        });
    }
}

export function getTest(test) {
    return async (dispatch, getState) => {
        if (localStorage.getItem(Crypto.KEY)) {
            const test = Crypto.decrypt();

            dispatch(setTimeLeft());

            return dispatch({
                type: GET_TEST,
                test: test,
            });
        }
    }
}

export function setTimeLeft() {
    return async (dispatch) => {
        const test = Crypto.decrypt();
        const SECONDS = 2;

        let left = test.left;

        setTimeout(() => {
            if (test.total <= left) {
                let test = Crypto.decrypt();

                dispatch(completeTest(test.id, test.questions));
            } else {
                left += SECONDS;

                dispatch({
                    type: SET_TIME_LEFT,
                    left: left,
                });

                dispatch(setTimeLeft());
            }
        }, SECONDS * 1000);
    }
}

export function getQuestion(test, question) {
    return async (dispatch) => {
        return dispatch({
            type: GET_QUESTION,
            question: question,
        })
    }
}

export function setAnswer(test, question, result) {
    return async (dispatch, getState) => {
        question.result = result;

        return dispatch({
            type: SET_QUESTION,
            question: question.id,
            result: question,
        })
    }
}

export function completeTest(test, questions) {
    return async (dispatch) => {
        dispatch(push(`/tests/${test}/complete`));

        localStorage.removeItem('test');
    }
}
