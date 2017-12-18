import React from 'react';

import { reduxForm, Form, Field } from 'redux-form';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import TextField from '../../../../utils/TextField';
import MaterialSelectField from "../../../../utils/SelectForm/index";
import MenuItem from 'material-ui/es/Menu/MenuItem';
import { STUDENT_ROLE, TEACHER_ROLE } from '../../../../services/constants/users';

class UserForm extends React.Component {
    constructor(props) {
        super(props);

        let { user } = props;

        this.state = {
            isStudent: (user.role == 'teacher') ? 2 : 1,
        }
    }

    onChangeRoleField(e) {
        this.setState({
            isStudent: e.target.values === STUDENT_ROLE,
        });
    }

    render() {
        let { handleSubmit, processForm, button, user, groups } = this.props;
        let groupField;

        if (this.state.isStudent) {
            groupField = (
                <div className="form-group">
                    <Field
                        label="Група"
                        name="group"
                        component={MaterialSelectField}
                        props={{
                            value: (user.group_id) ? user.group_id : 0
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {
                            groups.map((group) => {
                                return (
                                    <MenuItem key={group.id} value={group.id}>{group.name}</MenuItem>
                                )
                            })
                        }
                    </Field>
                </div>
            );
        }

        return (
            <Form onSubmit={handleSubmit(processForm)}>
                <div className="fields">
                    <div className="form-group">
                        <FormControl>
                            <Field
                                value={user.email}
                                label="Email користувача"
                                name="email"
                                type="email"
                                component={TextField}
                                props={{
                                    value: user.email
                                }}
                            />
                        </FormControl>
                    </div>
                    <div className="form-group">
                        <Field
                            label="Роль"
                            name="role"
                            onChange={this.onChangeRoleField.bind(this)}
                            component={MaterialSelectField}
                            props={{
                                value: (user.role == 'teacher') ? 2 : 1
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem key="student" value={1}>Студент</MenuItem>
                            <MenuItem key="teacher" value={2}>Викладач</MenuItem>
                        </Field>
                    </div>
                </div>
                <div className="fields">
                    <div className="form-group">
                        <FormControl>
                            <Field
                                label="Ім'я"
                                name="first_name"
                                type="text"
                                component={TextField}
                                props={{
                                    value: user.first_name,
                                }}
                            />
                        </FormControl>
                    </div>
                    <div className="form-group">
                        <FormControl>
                            <Field
                                label="Прізвище"
                                name="last_name"
                                type="text"
                                component={TextField}
                                props={{
                                    value: user.last_name,
                                }}
                            />
                        </FormControl>
                    </div>
                </div>
                <div className="fields">
                    <div className="form-group">
                        <FormControl>
                            <Field
                                label="По-батькові"
                                name="middle_name"
                                type="text"
                                component={TextField}
                                props={{
                                    value: user.middle_name,
                                }}
                            />
                        </FormControl>
                    </div>
                    { groupField }
                </div>
                <div className="controls">
                    <Button raised color="primary" type="submit">
                        { button }
                    </Button>
                </div>
            </Form>
        );
    }
}

function editUserForm() {
    return {
        form: 'edit-user-form'
    };
}

export default reduxForm(editUserForm())(UserForm);
