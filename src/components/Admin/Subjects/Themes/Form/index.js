import * as React from "react";

import { reduxForm, Form, Field } from 'redux-form';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import TextField from '../../../../../utils/TextField';

import './main.css';

class ThemeForm extends React.Component {
    render() {
        let { handleSubmit, processForm, button } = this.props;

        return (
            <Form onSubmit={handleSubmit(processForm)}>
                <div className="fields">
                    <div className="form-group">
                        <FormControl>
                            <Field
                                label="Назва теми"
                                name="title"
                                type="text"
                                component={TextField}
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

function createSubjectForm() {
    return {
        form: 'subject-form'
    };
}

export default reduxForm(createSubjectForm())(ThemeForm);
