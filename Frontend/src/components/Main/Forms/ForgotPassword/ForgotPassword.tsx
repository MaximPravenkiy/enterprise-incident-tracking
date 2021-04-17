import React from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { restorePassword } from 'redux/store/actions/login/loginCreator';
import { Dispatch } from 'redux';
import { RestorePasswordType } from 'redux/store/actions/login/interfaces';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 12 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
    }
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0
        },
        sm: {
            span: 24,
            offset: 12
        }
    }
};

const ForgotPassword = () => {
    const dispatch = useDispatch<Dispatch<RestorePasswordType>>();

    const onFinish = (values: any) => {
        dispatch(restorePassword(values));
    };

    return (
        <Form
            className="recover-password-form"
            {...formItemLayout}
            onFinish={onFinish}
        >
            <Form.Item
                label="To recover your password, enter your Login"
                name="login"
                rules={[
                    { required: true, message: 'Please input your Login!' }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="Create and enter a new Password"
                rules={[
                    {
                        min: 6,
                        message: 'Password must be at least 6 characters long!'
                    },
                    {
                        required: true,
                        message: 'Please input your Password!'
                    }
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirmPassword"
                label="Confirm new Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your Password!'
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(
                                new Error('Passwords do not match!')
                            );
                        }
                    })
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Restore password
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ForgotPassword;
