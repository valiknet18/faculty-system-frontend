import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth';
import tests from './tests';
import courses from './courses';
import tasks from './tasks';
import admin from './admin/messages';
import adminLearningSemesters from './admin/learning-semesters';
import adminSubjects from './admin/subjects';
import adminGroups from './admin/groups';
import adminUsers from './admin/users';
import adminCourses from './admin/courses';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    router: routerReducer,

    tests: tests,
    auth: auth,
    subjects: courses,
    form: formReducer,
    tasks: tasks,
    adminSubjects: adminSubjects,
    adminGroups: adminGroups,
    adminUsers: adminUsers,
    adminCourses: adminCourses,
    adminLearningSemesters: adminLearningSemesters,
    admin: admin,
});

export default rootReducer;
