import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import registerServiceWorker from './registerServiceWorker';
import configureTheme from './configureTheme';
import configureStore from './configureStore';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';

import Layout from './components/Layout';

import './index.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-quill/dist/quill.snow.css'

const theme = configureTheme();
const store = configureStore();

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <Layout/>
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
