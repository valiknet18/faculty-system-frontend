import React from "react";

import './main.css';

export default class Component extends React.Component {
    render() {
        return (
            <div className="completed-test-wrapper">
                <h4 className="header">Тест завершений</h4>
                <div className="body">
                    Результати тестування наступні:
                    <ul className="list">
                        <li>Кількість вірний відповідей: <span className="bold">0</span></li>
                        <li>Кількість неправильних відповідей: <span className="bold">4</span></li>
                        <li>Відсоток вірних відповідей: <span className="bold">0</span></li>
                        <li>Відсоток неправильних відповідей: <span className="bold">100%</span></li>
                        <li>Кількість балів: <span className="bold">0</span></li>
                        <li>Тест пройдений за: <span className="bold">2 хв</span></li>
                    </ul>
                </div>
            </div>
        );
    }
}
