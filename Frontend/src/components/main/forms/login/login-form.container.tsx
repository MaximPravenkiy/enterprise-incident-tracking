import React, { FC, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import {
    postLogin,
    updateValuesLoginForm
} from 'redux/actions/login/login.actions';
import { RootReducer } from 'redux/reducers/root.reducer';
import { ValuesLoginForm } from 'common/types/login';
import { LoginActions } from 'redux/actions/login/login.interfaces';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useDebouncedCallback } from 'use-debounce';
import LoginForm from './login-form.component';

const LoginFormContainer: FC<RouteComponentProps> = memo(({ history }) => {
    const { login, password, remember } = useSelector(
        ({ loginReducer }: RootReducer) => loginReducer.valuesLoginForm
    );
    const dispatch = useDispatch<Dispatch<LoginActions>>();

    const onFinish = useCallback(
        (values: ValuesLoginForm) => {
            dispatch(postLogin(values, history));
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    const onChange = useCallback((value: ValuesLoginForm) => {
        dispatch(updateValuesLoginForm(value));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const debouncedOnChange = useDebouncedCallback(onChange, 500);

    const onRegisterNowClick = useCallback(() => {
        history.push('/register');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onForgotPasswordClick = useCallback(() => {
        history.push('/forgot-password');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <LoginForm
            onFinish={onFinish}
            onChange={debouncedOnChange}
            login={login}
            password={password}
            remember={remember}
            onRegisterNowClick={onRegisterNowClick}
            onForgotPasswordClick={onForgotPasswordClick}
        />
    );
});

export default withRouter(LoginFormContainer);
