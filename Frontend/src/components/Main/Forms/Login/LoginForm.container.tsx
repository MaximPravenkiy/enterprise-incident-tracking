import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import LoginForm from 'components/Main/Forms/Login/LoginForm';
import {
    changeKeyDepsOnPath,
    postLogin,
    updateValuesLoginForm
} from 'redux/actions/login/login.actions';
import { RootReducer } from 'redux/reducers/rootReducer';
import { ValuesLoginForm } from 'common/types/login';
import { LoginActions } from 'redux/actions/login/login.interfaces';
import { useHistory } from 'react-router-dom';
import { openLoadingMessage } from 'common/services/notification.services';

const LoginFormContainer = () => {
    const { login, password, remember } = useSelector(
        ({ loginReducer }: RootReducer) => loginReducer.valuesLoginForm
    );
    const history = useHistory();
    const dispatch = useDispatch<Dispatch<LoginActions>>();

    const onFinish = (values: ValuesLoginForm) => {
        openLoadingMessage('Проверяем данные...');
        dispatch(postLogin({ loginFormValues: values, history }));
    };

    const onChange = (value: ValuesLoginForm) => {
        dispatch(updateValuesLoginForm({ updatedValueLoginForm: value }));
    };

    const onRegisterNowClick = () => {
        dispatch(changeKeyDepsOnPath({ keyDepsOnPath: '2' }));
    };

    const onForgotPasswordClick = () => {
        dispatch(changeKeyDepsOnPath({ keyDepsOnPath: '0' }));
    };

    return (
        <LoginForm
            onFinish={onFinish}
            onChange={onChange}
            login={login}
            password={password}
            remember={remember}
            onRegisterNowClick={onRegisterNowClick}
            onForgotPasswordClick={onForgotPasswordClick}
        />
    );
};

export default LoginFormContainer;
