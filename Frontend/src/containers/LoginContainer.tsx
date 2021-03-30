import React from 'react';
import {LoginForm} from "../components/Forms/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {postLogin, updateValuesLoginForm} from "../redux/store/actions/loginCreator";
import {openMessage} from "./ServerResponseHandlers/Message";
import {RootReducer} from "../redux/store/reducers/rootReducer";
import {Dispatch} from "redux";
import {LoginType} from "../redux/store/actions/Types/loginTypes";
import {LoginFormValue} from "../redux/store/reducers/loginReducer";


export type LoginFormTypes = LoginFormValue & {
    onFinish: (values: LoginFormValue) => void
    onChange: (value: LoginFormValue) => void
}

const LoginContainer = () => {
    const {login, password} = useSelector(({loginReducer}: RootReducer) => loginReducer);
    const dispatch = useDispatch<Dispatch<LoginType>>();

    const onFinish = (values: LoginFormValue) => {
        console.log('Received values of form: ', values);
        openMessage('Проверяем данные...');
        dispatch(postLogin(values));
    };

    const onChange = (value: LoginFormValue) => {
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