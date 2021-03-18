import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from "axios";
import {useDispatch} from "react-redux";
import {login} from "../../redux/store/actions/loginCreator";

const LoginForm = () => {
    const dispatch = useDispatch();

    const onFinish = async (values: any) => {
        console.log('Received values of form: ', values);
        try {
            const response = await axios.post(
                '/login',
                values
            );

            dispatch(login(response.data));
            localStorage.setItem('userData', JSON.stringify(response.data));
        } catch (e) {
            console.log(e.response.data.message)
        }
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >

            <Form.Item
                name="login"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
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
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <a href="#top">register now!</a>
            </Form.Item>
        </Form>
    );
};

export {LoginForm};
