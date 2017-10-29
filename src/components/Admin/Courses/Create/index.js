import * as React from "react";

import UserForm from '../Form';

import {connect} from "react-redux";
import {createCourse} from "../../../../services/actions/admin/courses";

class Create extends React.Component {
    async processForm(form) {
        let { dispatch } = this.props;

        dispatch(createCourse(form));
    }

    render() {
        return (
            <div className="create-form">
                <div className="title">
                    <h3>Додавання нового курсу</h3>
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
