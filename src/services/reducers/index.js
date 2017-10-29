import { combineReducers } from 'redux';
import auth from './auth';
import courses from './courses';
import admin from './admin';
import adminLearningSemesters from './admin/learning-semesters';
import adminSubjects from './admin/subjects';
import adminGroups from './admin/groups';
import adminUsers from './admin/users';
import adminCourses from './admin/courses';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    auth: auth,
    subjects: courses,
    form: formReducer,
    adminSubjects: adminSubjects,
    adminGroups: adminGroups,
    adminUsers: adminUsers,
    adminCourses: adminCourses,
    adminLearningSemesters: adminLearningSemesters,
    admin: admin
});


export default rootReducer;
