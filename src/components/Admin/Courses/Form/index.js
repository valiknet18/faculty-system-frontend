import * as React from "react";

import { reduxForm, Form, Field } from 'redux-form';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import TextField from '../../../../utils/TextField';
import MaterialSelectField from "../../../../utils/SelectForm";
import MenuItem from "material-ui/es/Menu/MenuItem";

class UserForm extends React.Component {
    render() {
        let { handleSubmit, processForm, button } = this.props;
        let { groups, teachers, subjects, learningSemesters } = this.props;
        let value = 10;

        return (
            <Form onSubmit={handleSubmit(processForm)}>
                <div className="fields">
                    <div className="form-group">
                        <Field
                            value={value}
                            label="Навчальний семестр"
                            name="learningSemester"
                            component={MaterialSelectField}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {
                                learningSemesters.map((learningSemester) => {
                                    return <MenuItem key={learningSemester.id} value={learningSemester.id}>{learningSemester.from_date} - {learningSemester.to_date}</MenuItem>
                                })
                            }
                        </Field>
                    </div>
                    <div className="form-group">
                        <Field
                            value={value}
                            label="Група"
                            name="group"
                            component={MaterialSelectField}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {
                                groups.map((group) => {
                                    return <MenuItem key={group.id} value={group.id}>{group.name}</MenuItem>
                                })
                            }
                        </Field>
                    </div>
                </div>
                <div className="fields">
                    <div className="form-group">
                        <Field
                            value={value}
                            label="Предмет"
                            name="subject"
                            component={MaterialSelectField}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {
                                subjects.map((subject) => {
                                    return <MenuItem key={subject.id} value={subject.id}>{subject.name}</MenuItem>
                                })
                            }
                        </Field>
                    </div>
                    <div className="form-group">
                        <Field
                            value={value}
                            label="Викладач"
                            name="teacher"
                            component={MaterialSelectField}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {
                                teachers.map((teacher) => {
                                    return <MenuItem key={teacher.id} value={teacher.id}>{teacher.last_name + " " + teacher.first_name}</MenuItem>
                                })
                            }
                        </Field>
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
