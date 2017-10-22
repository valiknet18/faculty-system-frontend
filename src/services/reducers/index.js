import { combineReducers } from 'redux';
import auth from './auth';
import courses from './courses';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    auth: auth,
    courses: courses,
    form: formReducer
});


export default rootReducer;
