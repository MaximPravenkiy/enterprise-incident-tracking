import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { LoginForm } from 'components/Forms/LoginForm';
import {
    changeKeyDepsOnPath,
    postLogin,
    updateValuesLoginForm
} from 'redux/store/actions/loginCreator';
import { RootReducer } from 'redux/store/reducers/rootReducer';
import { LoginFormValue, LoginType } from 'redux/store/reducers/loginReducer';
import { openMessage } from 'containers/ServerResponseHandlers/Message';

const LoginContainer = () => {
    const { login, password } = useSelector(
        ({ loginReducer }: RootReducer) => loginReducer
    );
    const dispatch = useDispatch<Dispatch<LoginType>>();

    const onFinish = (values: LoginFormValue) => {
        openMessage('Проверяем данные...');
        dispatch(postLogin(values));
    };

    const onChange = (value: LoginFormValue) => {
        dispatch(updateValuesLoginForm(value));
    };

    const onRegisterClick = () => {
        dispatch(changeKeyDepsOnPath('2')); // Меняет подсветку меню в хедере
    };

    return (
        <LoginForm
            onFinish={onFinish}
            onChange={onChange}
            login={login}
            password={password}
            onRegisterClick={onRegisterClick}
        />
    );
};

export default LoginContainer;
