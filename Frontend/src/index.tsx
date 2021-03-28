import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from "./GlobalStyle";
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, createStore} from "redux";
import rootReducer from './redux/store/reducers/rootReducer';
import {Provider} from "react-redux";
import createSagaMiddleware from 'redux-saga';
import rootWatcher from "./redux/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <GlobalStyles/>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

sagaMiddleware.run(rootWatcher);