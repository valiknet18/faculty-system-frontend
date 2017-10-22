import * as React from "react";

import SubjectForm from '../Form';

import './main.css';

export default class Create extends React.Component {
    async processForm(form) {

    }

    render() {
        return (
            <div className="create-form">
                <div className="title">
                    <h3>Створнення нового предмету</h3>
                </div>

                <SubjectForm processForm={this.processForm.bind(this)} button="Створити" />
            </div>
        );
    }
}
