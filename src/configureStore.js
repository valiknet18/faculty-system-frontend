import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import messageMiddleware from './services/middleware/messageMiddleware';

import rootReducer from './services/reducers/index';

export default function configureStore(history) {
    const routersMiddleware = routerMiddleware(history);
    const middlewares = [thunkMiddleware, routersMiddleware, messageMiddleware];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(...middlewares))
    );
}
