import React from 'react';
import UserForm from '../EditForm';
import {connect} from "react-redux";
import {editUser, getUser} from "../../../../services/actions/admin/users";
import {withRouter} from "react-router-dom";
import {getGroups} from "../../../../services/actions/admin/groups";

class Edit extends React.Component {
    constructor(props) {
        super(props);

        let { dispatch, match: { params } } = this.props;

        dispatch(getUser(params));
        dispatch(getGroups());
    }

    async processForm(form) {
        let { dispatch, match: { params } } = this.props;

        console.log(form);

        dispatch(editUser(params, form));
    }

    render() {
        let { user, groups } = this.props;

        return (
            <div className="edit-form">
                <div className="title">
                    <h3>Редагування участника</h3>
                </div>

                <UserForm processForm={this.processForm.bind(this)} button="Створити" user={user} groups={groups} />
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
