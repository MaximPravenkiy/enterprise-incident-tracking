import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RootReducer } from 'redux/store/reducers/rootReducer';
import RegistrationContainer from 'containers/Registration.container';
import LoginContainer from 'containers/Login.container';
import IncidentsContainer from 'containers/Incidents.container';
import ForgotPassword from 'components/Main/Forms/ForgotPassword/ForgotPassword';

const Routes = () => {
    const isAuth = useSelector(
        ({ loginReducer }: RootReducer) => loginReducer.isAuth
    );

    return (
        <Switch>
            <Route
                exact
                path="/"
                component={() =>
                    isAuth ? (
                        <Redirect to="/incidents" />
                    ) : (
                        <Redirect to="/login" />
                    )
                }
            />
            <Route
                exact
                path="/incidents"
                component={() =>
                    isAuth ? <IncidentsContainer /> : <Redirect to="/login" />
                }
            />
            <Route
                exact
                path="/login"
                component={() =>
                    isAuth ? <Redirect to="/incidents" /> : <LoginContainer />
                }
            />
            <Route
                exact
                path="/registration"
                component={() =>
                    isAuth ? (
                        <Redirect to="/incidents" />
                    ) : (
                        <RegistrationContainer />
                    )
                }
            />
            <Route
                exact
                path="/forgot-password"
                component={() =>
                    isAuth ? <Redirect to="/incidents" /> : <ForgotPassword />
                }
            />
            <Redirect to="/invalid-page" />
        </Switch>
    );
};

export default Routes;
