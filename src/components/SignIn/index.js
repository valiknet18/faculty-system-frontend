import React from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import './main.css';

export default class SignIn extends React.Component {
    render() {
        return (
            <Paper className="sign-in">
                <h3>Авторизація</h3>
                <div className="form-group">
                    <TextField label="E-mail" />
                </div>
                <div className="form-group">
                    <TextField label="Пароль" />
                </div>
                <div className="form-group">
                    <Button raised color="primary">
                        Авторизація
                    </Button>
                </div>
            </Paper>
        );
    }
}
