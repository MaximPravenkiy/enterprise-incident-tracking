import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RootReducer } from 'redux/reducers/rootReducer';
import RegistrationContainer from 'components/Main/Forms/Registration/RegistrationForm.container';
import LoginFormContainer from 'components/Main/Forms/Login/LoginForm.container';
import IncidentsContainer from 'components/Main/Incidents/Incidents.container';
import ForgotPassword from 'components/Main/Forms/ForgotPassword/ForgotPasswordForm';

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
                    isAuth ? <Redirect to="/incidents" /> : <LoginFormContainer />
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
