import * as React from "react";

import { reduxForm, Form, Field } from 'redux-form';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';

import TextField from '../../../../../../utils/TextField';
import renderQuill from '../../../../../../utils/QuillFormText';

class TaskForm extends React.Component {
    constructor (props) {
        super(props);

        this.handleContentChange = this.handleContentChange.bind(this);

        this.state = {
            content: 'Example text'
        };
    }

    handleContentChange(value) {
        this.setState({content: value});
    }

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

                <Field name="description" component={renderQuill} />

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
