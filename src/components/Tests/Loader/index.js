import React from 'react';
import { LinearProgress } from 'material-ui/Progress';

export default class Loader extends React.Component {
    render() {
        let { test } = this.props;

        const value = test.left / (test.total / 100);

        return (
            <div>
                <LinearProgress mode="determinate" value={value} />
            </div>
        );
    }
}
