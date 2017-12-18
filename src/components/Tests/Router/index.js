import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Preview from '../Preview';
import Process from '../Process';
import Complete from '../Complete';

export default class Router extends React.Component {
    render() {
        return (
            <div>
                <Route path="/tests/:test/preview" component={Preview} />
                <Route path="/tests/:test/questions/:question" component={Process} />
                <Route path="/tests/:test/complete" component={Complete} />
            </div>
        );
    }
}
