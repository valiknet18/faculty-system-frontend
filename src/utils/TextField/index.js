import React from 'react';
import { TextField } from 'material-ui';

const MaterialTextField = ({input, label, meta: { touched, error }, ...custom}) => {
    return <TextField
        label={label}
        {...input}
        {...custom}
    />
};

export default MaterialTextField;
