import * as React from "react";
import FilterItem from "../Item";

export default class Filter extends React.Component {
    render() {
        let students = [
            {
                id: 1,
                name: 'Гриневич В. О.'
            }
        ];

        let themes = [
            {
                id: 1,
                name: 'Тема 1'
            }
        ];

        return (
            <div className="dashboard-students">
                <form>
                    <FilterItem label="Студенти" items={students} />
                    <FilterItem label="Теми" items={themes} />
                </form>
            </div>
        );
    }
}
