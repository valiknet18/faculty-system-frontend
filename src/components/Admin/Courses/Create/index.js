import * as React from "react";

import UserForm from '../Form';

import {connect} from "react-redux";
import {createCourse} from "../../../../services/actions/admin/courses";
import {getGroups} from "../../../../services/actions/admin/groups";
import {getSubjects} from "../../../../services/actions/admin/subjects";
import {getTeachers} from "../../../../services/actions/admin/users";
import {getLearningSemesters} from "../../../../services/actions/admin/learning-semesters";

class Create extends React.Component {
    constructor(props) {
        super(props);

        let { dispatch } = this.props;

        dispatch(getGroups());
        dispatch(getSubjects());
        dispatch(getTeachers());
        dispatch(getLearningSemesters());
    }

    async processForm(form) {
        let { dispatch } = this.props;

        dispatch(createCourse(form));
    }

    render() {
        let { groups, teachers, subjects, learningSemesters } = this.props;

        return (
            <div className="create-form">
                <div className="title">
                    <h3>Додавання нового курсу</h3>
                </div>

                <UserForm
                    processForm={this.processForm.bind(this)}
                    button="Створити"
                    groups={groups}
                    teachers={teachers}
                    subjects={subjects}
                    learningSemesters={learningSemesters}
                />
            </div>
        );
    }
}

function mapStateToProps({ adminGroups, adminUsers, adminSubjects, adminLearningSemesters }) {
    return {
        groups: adminGroups.groups,
        teachers: adminUsers.users,
        subjects: adminSubjects.subjects,
        learningSemesters: adminLearningSemesters.learningSemesters,
    }
}

export default connect(mapStateToProps)(Create);
