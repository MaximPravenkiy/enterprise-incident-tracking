import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from 'redux/store';
import { Provider } from 'react-redux';
import App from 'app/app.component';
import GlobalStyles from 'app/global.styles';
import InvalidPage from 'components/invalid-page.component';

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
