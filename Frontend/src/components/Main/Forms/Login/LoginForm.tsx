import React, { FC, useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { LoginFormTypes } from 'components/Main/Forms/Login/interfaces';
import { configLogin, configPassword } from 'components/Main/Forms/Login/data';

const LoginForm: FC<LoginFormTypes> = ({
    onFinish,
    onChange,
    login,
    password,
    onRegisterClick
}) => {
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue({ login, password });
    }, [form, login, password]);

    return (
        <Form
            name="normal_login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onValuesChange={onChange}
            form={form}
        >
            <Form.Item {...configLogin}>
                <Input prefix={<UserOutlined />} placeholder="Username" />
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

                <a className="login-form-forgot" href="#top">
                    Forgot password
                </a>
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
                <NavLink to="/registration" onClick={onRegisterClick}>
                    register now!
                </NavLink>
            </Form.Item>
        </Form>
    );
};

export { LoginForm };
