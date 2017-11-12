import React from 'react';

import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import { FormControl } from 'material-ui/Form';

import { reduxForm, Form, Field } from 'redux-form';
import TextField from '../../utils/TextField';

import {checkRegistrationUser, loginUser, registrationUser} from '../../services/actions/auth';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        let { dispatch } = props;

        dispatch(checkRegistrationUser(props.match.params));
    }

    async handleForm(form) {
        let { dispatch } = this.props;

        dispatch(registrationUser(form, this.props.match.params));
    }

    render() {
        let { handleSubmit } = this.props;

        return (
            <Paper className="layout ">
                <h3>Реєстрація</h3>
                <Form onSubmit={handleSubmit(this.handleForm.bind(this))}>
                    <div className="fields">
                        <div className="form-group">
                            <FormControl>
                                <Field
                                    label="E-mail"
                                    name="email"
                                    type="email"
                                    readonly
                                    component={TextField}
                                />
                            </FormControl>
                        </div>
                        <div className="form-group">
                            <FormControl>
                                <Field
                                    label="Номер телефону"
                                    name="phone"
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
                                    label="Ім'я"
                                    name="first_name"
                                    type="text"
                                    component={TextField}
                                />
                            </FormControl>
                        </div>
                        <div className="form-group">
                            <FormControl>
                                <Field
                                    label="Прізвіще"
                                    name="last_name"
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
                                    label="По-батькові"
                                    name="middle_name"
                                    type="text"
                                    component={TextField}
                                />
                            </FormControl>
                        </div>
                        <div className="form-group">
                            <FormControl>
                                <Field
                                    label="Пароль"
                                    name="password"
                                    type="password"
                                    component={TextField}
                                />
                            </FormControl>
                        </div>
                    </div>
                    <div className="controls">
                        <div className="form-group">
                            <Button raised color="primary" type="submit">
                                Зареєструватися
                            </Button>
                        </div>
                    </div>
                </Form>
            </Paper>
        );
    }
}

function createRegistrationForm() {
    return {
        form: 'registration-form'
    };
}

SignUp = reduxForm(createRegistrationForm())(SignUp);

export default SignUp;
