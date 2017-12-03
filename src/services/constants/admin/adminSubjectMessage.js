import { CREATE_LEARNING_SEMESTER } from "./learning-semesters";
import {
    CREATE_SUBJECT,
    CREATE_THEME,
    CREATE_TASK
} from './subjects';
import {CREATE_GROUP} from "./groups";
import {CREATE_COURSE} from "./courses";

export const message = {
    ADD_SUBJECT_SUCCESS: 'Предмет успішно створений',
    ADD_THEME_SUCCESS: 'Тема успішно створена',
    ADD_GROUP_SUCCESS: 'Група успішно створена',
    ADD_SEMESTER_SUCCESS: 'Навчальний семестр успішно створений',
    ADD_COURSE_SUCCESS: 'Навчальний курс успішно створений',
    ADD_TASK_SUCCESS: 'Завдання успішно створене',
};

export const instructions = {
    [CREATE_LEARNING_SEMESTER]: message.ADD_SEMESTER_SUCCESS,
    [CREATE_SUBJECT]: message.ADD_SUBJECT_SUCCESS,
    [CREATE_THEME]: message.ADD_THEME_SUCCESS,
    [CREATE_TASK]: message.ADD_TASK_SUCCESS,
    [CREATE_GROUP]: message.ADD_GROUP_SUCCESS,
    [CREATE_COURSE]: message.ADD_COURSE_SUCCESS,
};
