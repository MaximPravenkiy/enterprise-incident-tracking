import React, { useEffect } from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import { RegistrationInitialStateType } from 'redux/store/reducers/registrationReducer';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
    }
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0
        },
        sm: {
            span: 16,
            offset: 8
        }
    }
};

const config = {
    rules: [
        {
            type: 'object' as const,
            required: true,
            message: 'Please select your Date of birth!'
        }
    ]
};

interface RegistrationFormTypes extends RegistrationInitialStateType {
    registerNewUser: (values: RegistrationInitialStateType) => void;
    onChange: (value: RegistrationInitialStateType) => void;
}

const RegistrationForm: React.FC<RegistrationFormTypes> = ({
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
    }, [form, dateOfBirth, fullname, login, password, position]);

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={registerNewUser}
            onValuesChange={onChange}
            className="registration-form"
        >
            <Form.Item
                label="Full Name"
                name="fullname"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Full Name!'
                    },
                    {
                        pattern: /^\D*$/,
                        message: "This field can't contain numbers!"
                    }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Login"
                name="login"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Login!'
                    }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!'
                    },
                    {
                        min: 6,
                        message: 'Password must be at least 6 characters long!'
                    }
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="dateOfBirth" label="Date of birth" {...config}>
                <DatePicker />
            </Form.Item>

            <Form.Item
                label="Position"
                name="position"
                rules={[
                    {
                        required: true,
                        message: 'Please input your position!'
                    }
                ]}
            >
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
