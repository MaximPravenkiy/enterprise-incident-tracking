import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { LoginForm } from '../components/Forms/LoginForm';
import {
    postLogin,
    updateValuesLoginForm
} from '../redux/store/actions/loginCreator';
import { openMessage } from './ServerResponseHandlers/Message';
import { RootReducer } from '../redux/store/reducers/rootReducer';
import {
    LoginFormValue,
    LoginType
} from '../redux/store/reducers/loginReducer';

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

    return (
        <LoginForm
            onFinish={onFinish}
            onChange={onChange}
            login={login}
            password={password}
        />
    );
};

export default LoginContainer;
