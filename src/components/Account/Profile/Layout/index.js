import React from 'react';
import Paper from 'material-ui/Paper';
import BigCalendar from 'react-big-calendar';

import './main.css';

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

export default class Layout extends React.Component {
    render() {
        let events = [
            {
                'title': 'All Day Event',
                'allDay': true,
                'start': new Date(2017, 9, 30),
                'end': new Date(2017, 9, 30)
            },
            {
                'title': 'Long Event',
                'start': new Date(2017, 9, 7),
                'end': new Date(2017, 9, 10)
            },
        ];

        return (
            <Paper className="layout">
                <div>
                    <BigCalendar
                        events={events}
                        views={allViews}
                        step={60}
                    />
                </div>
            </Paper>
        );
    }
}
