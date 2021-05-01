import React, { FC, useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { LoginFormTypes } from 'components/Main/Forms/Login/LoginForm.interfaces';
import { configLogin, configPassword } from 'components/Main/Forms/Login/LoginForm.data';

const LoginForm: FC<LoginFormTypes> = ({
    onFinish,
    onChange,
    login,
    password,
    onRegisterNowClick,
    onForgotPasswordClick,
    remember
}) => {
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue({ login, password, remember });
    }, [form, login, password, remember]);

    return (
        <Form
            name="normal_login"
            onFinish={onFinish}
            onValuesChange={onChange}
            form={form}
        >
            <Form.Item {...configLogin}>
                <Input prefix={<UserOutlined />} placeholder="Login" />
            </Form.Item>

            <Form.Item {...configPassword}>
                <Input
                    prefix={<LockOutlined />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>

            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <NavLink to="/forgot-password" onClick={onForgotPasswordClick}>
                    Forgot password
                </NavLink>
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                >
                    Log in
                </Button>{' '}
                Or{' '}
                <NavLink to="/registration" onClick={onRegisterNowClick}>
                    register now!
                </NavLink>
            </Form.Item>
        </Form>
    );
};

export { LoginForm };
