import * as React from "react";

import SubjectForm from '../Form';

import './main.css';
import {connect} from "react-redux";
import {createSubject} from "../../../../services/actions/admin/subjects";

class Create extends React.Component {
    async processForm(form) {
        let { dispatch } = this.props;

        dispatch(createSubject(form));
    }

    render() {
        return (
            <div className="create-form">
                <div className="title">
                    <h3>Створнення нового предмету</h3>
                </div>

                <SubjectForm processForm={this.processForm.bind(this)} button="Створити" />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(Create);
