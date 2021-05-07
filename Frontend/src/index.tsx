import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from 'redux/store';
import { Provider } from 'react-redux';
import App from 'app/App';
import GlobalStyles from 'app/GlobalStyle';
import InvalidPage from 'components/InvalidPage';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <GlobalStyles />
            <Switch>
                <Route exact path="/invalid-page" component={InvalidPage} />
                <Route path="/" component={App} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
