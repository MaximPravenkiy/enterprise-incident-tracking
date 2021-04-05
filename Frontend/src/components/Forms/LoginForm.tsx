import React, { FC, useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { IValuesLoginForm } from 'common/interfaces/login';

interface LoginFormTypes extends IValuesLoginForm {
    onFinish: (values: IValuesLoginForm) => void;
    onChange: (value: IValuesLoginForm) => void;
    onRegisterClick: () => void;
}

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
            <Form.Item
                name="login"
                rules={[
                    { required: true, message: 'Please input your Username!' }
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[
                    { required: true, message: 'Please input your Password!' }
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
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
