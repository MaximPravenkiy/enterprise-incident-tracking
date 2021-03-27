import React from 'react';
import {LoginForm} from "../components/Forms/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {postLogin, updateValuesLoginForm} from "../redux/store/actions/loginCreator";
import {openMessage} from "./ServerResponseHandlers/Message";

export interface LoginProps {
    onFinish: any,
    onChange: any,
    login: any,
    password: any
}

const LoginContainer = () => {
    const {login, password} = useSelector(({loginReducer}: any) => loginReducer);
    const dispatch = useDispatch();

    const onFinish = async (values: any) => {
        console.log('Received values of form: ', values);
        openMessage('Проверяем данные...');
        dispatch(postLogin(values));
    };

    const onChange = (value: any) => {
        dispatch(updateValuesLoginForm(value));
    }

    return (
        <LoginForm
            onFinish={onFinish}
            onChange={onChange}
            login={login}
            password={password}
        />
    );
}

export default LoginContainer;