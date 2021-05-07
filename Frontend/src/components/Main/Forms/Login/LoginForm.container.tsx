import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import LoginForm from 'components/Main/Forms/Login/LoginForm';
import {
    postLogin,
    updateValuesLoginForm
} from 'redux/actions/login/login.actions';
import { RootReducer } from 'redux/reducers/rootReducer';
import { ValuesLoginForm } from 'common/types/login';
import { LoginActions } from 'redux/actions/login/login.interfaces';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const LoginFormContainer: FC<RouteComponentProps> = ({ history }) => {
    const { login, password, remember } = useSelector(
        ({ loginReducer }: RootReducer) => loginReducer.valuesLoginForm
    );
    const dispatch = useDispatch<Dispatch<LoginActions>>();

    const onFinish = (values: ValuesLoginForm) => {
        dispatch(postLogin({ loginFormValues: values, history }));
    };

    const onChange = (value: ValuesLoginForm) => {
        dispatch(updateValuesLoginForm({ updatedValueLoginForm: value }));
    };

    const onRegisterNowClick = () => {
        history.push('/register');
    };

    const onForgotPasswordClick = () => {
        history.push('/forgot-password');
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

export default withRouter(LoginFormContainer);
