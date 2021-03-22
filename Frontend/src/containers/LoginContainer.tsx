import React from 'react';
import {LoginForm} from "../components/Forms/LoginForm";
import {useDispatch} from "react-redux";
import {postLogin} from "../redux/store/actions/loginCreator";

export interface LoginProps {
    onFinish: any
}

const LoginContainer = () => {
    const dispatch = useDispatch();

    const onFinish = async (values: any) => {
        console.log('Received values of form: ', values);
        dispatch(postLogin(values));
    };

    return (
        <LoginForm onFinish={onFinish}/>
    );
}

export default LoginContainer;