import React from 'react';
import Button from 'material-ui/Button';
import Save from 'material-ui-icons/Save';
import { startTest, getTest } from '../../../services/actions/tests';
import { connect } from "react-redux";

import './main.css';
import Crypto from "../../../services/utils/crypto";

class Preview extends React.Component {
    constructor(props) {
        super(props);

        let { dispatch, match: { params: { test } }}  = this.props;

        dispatch(getTest(test));
    }

    onClick() {
        let { dispatch, match: { params: { test } } } = this.props;

        dispatch(startTest(test));
    }

    render() {
        let { test } = this.props;

        return (
            <div className="preview-wrapper">
                <div>
                    <h1>Тест 1</h1>
                </div>
                <div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="list-of-points">
                    <ul>
                        <li>
                            Час виконання: <span className="bold">30хв</span>
                        </li>
                        <li>
                            Кількість запитань: <span className="bold">10</span>
                        </li>
                    </ul>
                </div>
                <div className={`controls`}>
                    <Button raised color="primary"
                            onClick={this.onClick.bind(this)}>
                        Почати
                        <Save />
                    </Button>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ test }) {
    return {
        test: test,
    };
}

export default connect(mapStateToProps)(Preview);
