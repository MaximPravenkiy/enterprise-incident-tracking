import React, { FC } from 'react';
import { Button, Form, Input } from 'antd';
import { RestorePasswordFormValue } from 'common/types/login';
import {
    formItemLayout,
    tailFormItemLayout,
    configLogin,
    configPassword,
    configConfirmPassword
} from './ForgotPasswordForm.data';

interface ForgotPasswordFormProps {
    onFinish: (values: RestorePasswordFormValue) => void;
}

const ForgotPasswordForm: FC<ForgotPasswordFormProps> = ({ onFinish }) => (
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
);

export default ForgotPasswordForm;
