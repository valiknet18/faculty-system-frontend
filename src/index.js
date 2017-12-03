import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import { history } from './utils/history';
import registerServiceWorker from './registerServiceWorker';
import configureTheme from './configureTheme';
import configureStore from './configureStore';

import Layout from './components/Layout';

import './index.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-quill/dist/quill.snow.css'

const theme = configureTheme();
const store = configureStore(history);

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <Router history={history}>
                    <Layout/>
                </Router>
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
