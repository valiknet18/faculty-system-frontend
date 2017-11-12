const prefix = 'courses';

export default {
    list: `${prefix}`,
    getTasks: `${prefix}/:course:/tasks`,
    getTask: `${prefix}/:course:/tasks/:task:`,
    moveTask: `${prefix}/:course:/tasks/:task:/move`,
};
