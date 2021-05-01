import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { LoginForm } from 'components/Main/Forms/Login/LoginForm';
import {
    changeKeyDepsOnPath,
    postLogin,
    updateValuesLoginForm
} from 'redux/actions/login/loginCreator';
import { RootReducer } from 'redux/reducers/rootReducer';
import { openMessage } from 'common/serverResponseHandlers/message';
import { ValuesLoginForm } from 'common/types/login';
import { LoginType } from 'redux/actions/login/interfaces';
import { useHistory } from 'react-router-dom';

const LoginFormContainer = () => {
    const { login, password, remember } = useSelector(
        ({ loginReducer }: RootReducer) => loginReducer.valuesLoginForm
    );
    const history = useHistory();
    const dispatch = useDispatch<Dispatch<LoginType>>();

    const onFinish = (values: ValuesLoginForm) => {
        openMessage('Проверяем данные...');
        dispatch(postLogin(values, history));
    };

    const onChange = (value: ValuesLoginForm) => {
        dispatch(updateValuesLoginForm(value));
    };

    const onRegisterNowClick = () => {
        dispatch(changeKeyDepsOnPath('2')); // Меняет подсветку меню в хедере
    };

    const onForgotPasswordClick = () => {
        dispatch(changeKeyDepsOnPath('0'));
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
