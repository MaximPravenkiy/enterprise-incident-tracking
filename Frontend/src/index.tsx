import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from 'app/App';
import rootWatcher from 'redux/store/sagas';
import rootReducer from 'redux/store/reducers/rootReducer';
import GlobalStyles from 'app/GlobalStyle.d';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <GlobalStyles />
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
