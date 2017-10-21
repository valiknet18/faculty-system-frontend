import React from 'react';

import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import { FormControl } from 'material-ui/Form';

import { reduxForm, Form, Field } from 'redux-form';
import TextField from '../../utils/TextField';

import { loginUser } from '../../services/actions/auth';

import './main.css';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
    }

    async handleForm(form) {
        let { dispatch } = this.props;

        dispatch(loginUser(form));
    }

    render() {
        let { handleSubmit } = this.props;

        return (
            <Paper className="sign-in">
                <h3>Авторизація</h3>
                <Form onSubmit={handleSubmit(this.handleForm.bind(this))}>
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
                        <FormControl>
                            <Field
                                label="Пароль"
                                name="password"
                                type="password"
                                component={TextField}
                            />
                        </FormControl>
                    </div>
                    <div className="form-group">
                        <Button raised color="primary" type="submit">
                            Авторизація
                        </Button>
                    </div>
                </Form>
            </Paper>
        );
    }
}

function createLoginForm() {
    return {
        form: 'login-form'
    };
}

SignIn = reduxForm(createLoginForm())(SignIn);

export default SignIn;
