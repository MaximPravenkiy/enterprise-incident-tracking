import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RootReducer } from 'redux/reducers/root.reducer';
import RegistrationContainer from 'components/main/forms/registration/registration-form.container';
import LoginFormContainer from 'components/main/forms/login/login-form.container';
import IncidentsContainer from 'components/main/incidents/incidents.container';
import ForgotPasswordFormContainer from 'components/main/forms/forgot-password/forgot-password-form.container';

const Routes = () => {
    const isAuth = useSelector(
        ({ userInfoReducer }: RootReducer) => userInfoReducer.isAuth
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
                    isAuth ? (
                        <Redirect to="/incidents" />
                    ) : (
                        <LoginFormContainer />
                    )
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
                    isAuth ? (
                        <Redirect to="/incidents" />
                    ) : (
                        <ForgotPasswordFormContainer />
                    )
                }
            />
            <Redirect to="/invalid-page" />
        </Switch>
    );
};

export default Routes;
