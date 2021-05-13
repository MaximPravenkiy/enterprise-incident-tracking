import React, { FC, memo } from 'react';
import { Button, Form, Input } from 'antd';
import {
    formItemLayout,
    tailFormItemLayout,
    configLogin,
    configPassword,
    configConfirmPassword
} from './forgot-password-form.data';
import { ForgotPasswordFormProps } from './forgot-password-form.interfaces';

const ForgotPasswordForm: FC<ForgotPasswordFormProps> = memo(({ onFinish }) => (
    <Form
        className="recover-password-form"
        {...formItemLayout}
        onFinish={onFinish}
    >
        <Form.Item {...configLogin}>
            <Input />
        </Form.Item>

        <Form.Item {...configPassword}>
            <Input.Password />
        </Form.Item>

        <Form.Item {...configConfirmPassword}>
            <Input.Password />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
                Restore password
            </Button>
        </Form.Item>
    </Form>
));

export default ForgotPasswordForm;
