import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import GroupForm from '../Form';
import {editGroup} from "../../../../services/actions/admin/groups";

class Edit extends React.Component {
    async processForm(form) {
        let { dispatch, match: {params} } = this.props;

        dispatch(editGroup(params, form));
    }

    render() {
        return (
            <div className="edit-form">
                <div className="title">
                    <h3>Редагування назви групи</h3>
                </div>

                <GroupForm processForm={this.processForm.bind(this)} button="Редагувати"/>
            </div>
        );
    }
}

function mapStateToProps({ adminUsers, adminGroups }) {
    return {
        user: adminUsers.user,
        groups: adminGroups.groups,
    }
}

export default withRouter(connect(mapStateToProps)(Edit));
