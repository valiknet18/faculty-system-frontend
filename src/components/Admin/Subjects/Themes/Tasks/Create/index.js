import * as React from "react";
import TaskForm from '../Form';
import { connect } from "react-redux";
import { createTask } from "../../../../../../services/actions/admin/subjects";

class Create extends React.Component {
    async processForm(form) {
        let { dispatch, match: { params } } = this.props;

        dispatch(createTask(params, form));
    }

    render() {
        return (
            <div className="create-form">
                <div className="title">
                    <h3>Створнення нової темі</h3>
                </div>

                <TaskForm processForm={this.processForm.bind(this)} button="Створити" />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(Create);
