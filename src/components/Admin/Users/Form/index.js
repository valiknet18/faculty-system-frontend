import * as React from "react";

import { reduxForm, Form, Field } from 'redux-form';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import TextField from '../../../../utils/TextField';
import MaterialSelectField from "../../../../utils/SelectForm/index";
import MenuItem from "material-ui/es/Menu/MenuItem";
import Input from "material-ui/es/Input/Input";

class UserForm extends React.Component {
    render() {
        let { handleSubmit, processForm, button } = this.props;
        let value = 1;

        return (
            <Form onSubmit={handleSubmit(processForm)}>
                <div className="fields">
                    <div className="form-group">
                        <FormControl>
                            <Field
                                label="Email користувача"
                                name="email"
                                type="email"
                                component={TextField}
                            />
                        </FormControl>
                    </div>
                    <div className="form-group">
                        <Field
                            value={value}
                            label="Роль"
                            name="role"
                            component={MaterialSelectField}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem key="student" value={1}>Студент</MenuItem>
                            <MenuItem key="teacher" value={2}>Викладач</MenuItem>
                        </Field>
                    </div>
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

function createUserForm() {
    return {
        form: 'user-form'
    };
}

export default reduxForm(createUserForm())(UserForm);
