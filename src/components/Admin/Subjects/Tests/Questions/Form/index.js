import * as React from "react";

import { reduxForm, Form, Field } from 'redux-form';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';

import TextField from '../../../../../../utils/TextField';
import QuillFormText from "../../../../../../utils/QuillFormText";

class TaskForm extends React.Component {
    render() {
        let { handleSubmit, processForm, button } = this.props;

        return (
            <Form onSubmit={handleSubmit(processForm)}>
                <div className="fields">
                    <div className="form-group">
                        <FormControl>
                            <Field
                                label="Назва задачі"
                                name="title"
                                type="text"
                                component={TextField}
                            />
                        </FormControl>
                    </div>
                </div>
                <div className="fields">
                    <div className="form-group">
                        <FormControl>
                            <Field
                                label="Опис задачі"
                                name="content"
                                type="text"
                                multiline
                                rows="4"
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

function createTaskForm() {
    return {
        form: 'task-form'
    };
}

export default reduxForm(createTaskForm())(TaskForm);
