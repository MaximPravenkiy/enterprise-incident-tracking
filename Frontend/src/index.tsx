import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux/store/reducers/rootReducer';
import GlobalStyles from './GlobalStyle';
import App from './App';
import rootWatcher from './redux/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <GlobalStyles />
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

sagaMiddleware.run(rootWatcher);
