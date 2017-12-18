import authEndpoints from './auth';
import coursesEndpoints from './courses';
import testsEndpoints from './tests';
import adminEndpoints from './admin';

export default {
    auth: authEndpoints,
    courses: coursesEndpoints,
    admin: adminEndpoints,
    tests: testsEndpoints,
};
