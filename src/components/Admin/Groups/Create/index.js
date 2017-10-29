import * as React from "react";

import SubjectForm from '../Form';

import {connect} from "react-redux";
import {createGroup} from "../../../../services/actions/admin/groups";

class Create extends React.Component {
    async processForm(form) {
        let { dispatch } = this.props;

        dispatch(createGroup(form));
    }

    render() {
        return (
            <div className="create-form">
                <div className="title">
                    <h3>Створнення нової групі</h3>
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
