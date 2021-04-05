import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { LoginForm } from 'components/Main/Forms/Login/LoginForm';
import {
    changeKeyDepsOnPath,
    postLogin,
    updateValuesLoginForm
} from 'redux/store/actions/login/loginCreator';
import { RootReducer } from 'redux/store/reducers/rootReducer';
import { openMessage } from 'common/ServerResponseHandlers/Message';
import { IValuesLoginForm } from 'common/interfaces/login';
import { LoginType } from 'redux/store/actions/login/interfaces';

const LoginContainer = () => {
    const { login, password } = useSelector(
        ({ loginReducer }: RootReducer) => loginReducer.valuesLoginForm
    );
    const dispatch = useDispatch<Dispatch<LoginType>>();

    const onFinish = (values: IValuesLoginForm) => {
        openMessage('Проверяем данные...');
        dispatch(postLogin(values));
    };

    const onChange = (value: IValuesLoginForm) => {
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
