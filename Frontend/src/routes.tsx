import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RootReducer } from 'redux/store/reducers/rootReducer';
import RegistrationContainer from 'containers/RegistrationContainer';
import LoginContainer from 'containers/LoginContainer';
import IncidentsContainer from 'containers/IncidentsContainer';

const Routes = () => {
    const isAuth = useSelector(
        ({ loginReducer }: RootReducer) => loginReducer.isAuth
    );
    const routes = isAuth ? (
        <Switch>
            <Route exact path="/incidents" component={IncidentsContainer} />
            <Redirect to="/incidents" />
        </Switch>
    ) : (
        <Switch>
            <Route exact path="/login" component={LoginContainer} />
            <Route
                exact
                path="/registration"
                component={RegistrationContainer}
            />
            <Redirect to="/login" />
        </Switch>
    );

    return <>{routes}</>;
};

export default Routes;
