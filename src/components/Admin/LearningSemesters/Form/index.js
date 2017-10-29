import * as React from "react";

import { reduxForm, Form, Field } from 'redux-form';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import TextField from '../../../../utils/TextField';

class UserForm extends React.Component {
    render() {
        let { handleSubmit, processForm, button } = this.props;

        return (
            <Form onSubmit={handleSubmit(processForm)}>
                <div className="fields">
                    <div className="form-group">
                        <FormControl>
                            <Field
                                label="Початок"
                                name="from_date"
                                type="date"
                                defaultValue={new Date()}
                                component={TextField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </FormControl>
                    </div>
                    <div className="form-group">
                        <FormControl>
                            <Field
                                label="Кінець"
                                name="to_date"
                                type="date"
                                defaultValue={new Date(Date.now()).toLocaleString()}
                                component={TextField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </FormControl>
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

function createGroupForm() {
    return {
        form: 'group-form'
    };
}

export default reduxForm(createGroupForm())(UserForm);
