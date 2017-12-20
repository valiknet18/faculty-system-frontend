import { GET_QUESTION, GET_TEST, SET_QUESTION, SET_TIME_LEFT } from "../constants/tests";
import Crypto from "../utils/crypto";

let initialState = {
    test: null,
    question: null,
    nextQuestion: null,
    waitingForTest: true,
    waitingForQuestion: true,
};

export default function tests(state = initialState, action) {
    switch (action.type) {
        case GET_TEST:
            return Object.assign({}, state, {
                test: action.test,
            });

        case GET_QUESTION:
            let question = state.test.questions.find((item) => {
                console.log(item);

                return item.id == action.question;
            }) || {};

            let nextQuestion = state.test.questions.find((item) => {
                return !item.result && (item.id != question.id);
            }) || {};

            return Object.assign({}, state, {
                question: question,
                nextQuestion: nextQuestion,
            });

        case SET_QUESTION:
            let result = [];

            for (let question of state.test.questions) {
                if (question.id !== action.question) {
                    result.push(question);
                } else {
                    result.push(action.result);
                }
            }

            question = result.find((item) => {
                console.log(item);

                return item.id == action.question;
            }) || {};

            test = Object.assign({}, state.test, {
                questions: result,
            });

            Crypto.encrypt(test);

            return Object.assign({}, state, {
                test: test,
                question: question,
            });

        case SET_TIME_LEFT:
            let test = Crypto.decrypt();

            test = Object.assign({}, test, {
                left: action.left,
            });

            Crypto.encrypt(test);

            return Object.assign({}, state, {
                test: test,
            });

        default:
            return state;
    }
}
