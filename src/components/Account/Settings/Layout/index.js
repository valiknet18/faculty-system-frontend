import React from 'react';

import Paper from 'material-ui/Paper';

import Button from 'material-ui/Button';
import { FormControl } from 'material-ui/Form';
import TextField from '../../../../utils/TextField';

import { reduxForm, Form, Field } from 'redux-form';

import './main.css';

class Layout extends React.Component {
    handleForm(form) {

    }

    render() {
        let { handleSubmit } = this.props;

        return (
            <Paper className="layout settings-layout">
                <h3>Налаштування профайлу</h3>
                <Form onSubmit={handleSubmit(this.handleForm.bind(this))}>
                    <div className="form-group">
                        <FormControl>
                            <Field
                                label="Прізвіще"
                                name="firstName"
                                type="text"
                                component={TextField}
                            />
                        </FormControl>
                    </div>
                    <div className="form-group">
                        <FormControl>
                            <Field
                                label="Ім'я"
                                name="lastName"
                                type="text"
                                component={TextField}
                            />
                        </FormControl>
                    </div>
                    <div className="form-group">
                        <FormControl>
                            <Field
                                label="По-батькові"
                                name="middleName"
                                type="text"
                                component={TextField}
                            />
                        </FormControl>
                    </div>
                    <div className="form-group">
                        <FormControl>
                            <Field
                                label="E-mail"
                                name="email"
                                type="email"
                                component={TextField}
                            />
                        </FormControl>
                    </div>
                    <div className="form-group">
                        <Button raised color="primary" type="submit">
                            Зберегти
                        </Button>
                    </div>
                </Form>
            </Paper>
        );
    }
}

function createLoginForm() {
    return {
        form: 'settings-form'
    };
}

const Settings = reduxForm(createLoginForm())(Layout);

export default Settings;
