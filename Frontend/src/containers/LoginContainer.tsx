import React from 'react';
import {LoginForm} from "../components/Forms/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {postLogin, updateValuesLoginForm} from "../redux/store/actions/loginCreator";
import {openMessage} from "./ServerResponseHandlers/Message";
import {RootReducer} from "../redux/store/reducers/rootReducer";
import {Dispatch} from "redux";
import {LoginType} from "../redux/store/actions/Types/loginTypes";
import {LoginInitialStateType} from "../redux/store/reducers/loginReducer";

export type LoginFormTypes =  {
    login: LoginInitialStateType["login"]
    password: LoginInitialStateType["password"]
    onFinish: (values: any) => void
    onChange: (value: any) => void
}

const LoginContainer = () => {
    const {login, password} = useSelector(({loginReducer}: RootReducer) => loginReducer);
    const dispatch = useDispatch<Dispatch<LoginType>>();

    const onFinish = (values: any) => {
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