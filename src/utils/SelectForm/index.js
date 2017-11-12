import React from 'react';
import InputLabel from "material-ui/es/Input/InputLabel";
import Select from 'material-ui/Select';
import FormControl from "material-ui/es/Form/FormControl";

const MaterialSelectField = ({children, input, label, ...custom}) => {

    return (
        <FormControl>
            <InputLabel htmlFor="age-simple">{label}</InputLabel>
            <Select
                {...input}
                {...custom}
            >
                {children}
            </Select>
        </FormControl>

    )
};

export default MaterialSelectField;
