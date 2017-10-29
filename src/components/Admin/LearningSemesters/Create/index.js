import * as React from "react";

import UserForm from '../Form';

import {connect} from "react-redux";
import {createLearningSemester} from "../../../../services/actions/admin/learning-semesters";

class Create extends React.Component {
    async processForm(form) {
        let { dispatch } = this.props;

        dispatch(createLearningSemester(form));
    }

    render() {
        return (
            <div className="create-form">
                <div className="title">
                    <h3>Додавання нового навчального семестру</h3>
                </div>

                <UserForm processForm={this.processForm.bind(this)} button="Створити" />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(Create);
