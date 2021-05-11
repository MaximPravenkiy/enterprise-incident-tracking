import React, { FC, useEffect } from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import { RegistrationFormTypes } from './RegistrationForm.interfaces';
import {
    configDateOfBirth,
    configFullname,
    configLogin,
    configPassword,
    configPosition,
    formItemLayout,
    tailFormItemLayout
} from './RegistrationForm.data';

const RegistrationForm: FC<RegistrationFormTypes> = ({
    registerNewUser,
    dateOfBirth,
    fullname,
    login,
    password,
    position,
    onChange
}) => {
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue({
            dateOfBirth,
            fullname,
            login,
            password,
            position
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={registerNewUser}
            onValuesChange={onChange}
            className="registration-form"
        >
            <Form.Item {...configFullname}>
                <Input />
            </Form.Item>

            <Form.Item {...configLogin}>
                <Input />
            </Form.Item>

            <Form.Item {...configPassword}>
                <Input.Password />
            </Form.Item>

            <Form.Item {...configDateOfBirth}>
                <DatePicker />
            </Form.Item>

            <Form.Item {...configPosition}>
                <Input />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};

export { RegistrationForm };
