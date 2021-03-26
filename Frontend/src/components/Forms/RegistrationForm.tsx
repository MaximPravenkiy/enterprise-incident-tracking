import React, {useEffect} from 'react';
import {
    Form,
    Input,
    Button,
    DatePicker,
} from 'antd';
import styled from 'styled-components';
import {RegistrationProps} from "../../containers/RegistrationContainer";

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};



const config = {
    rules: [{
        type: 'object' as const,
        required: true,
        message: 'Please select your Date of birth!'
    }],
};

const FormCustom = styled(Form)`
   min-width: 35%;
`

const RegistrationForm = (
    {
        registerNewUser,
        dateOfBirth,
        fullname,
        login,
        password,
        position,
        onChange
    }: RegistrationProps) => {
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue({
            dateOfBirth,
            fullname,
            login,
            password,
            position
        })
    });

    return (
        <FormCustom
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={registerNewUser}
            onValuesChange={onChange}
        >
            <Form.Item
                label="Full Name"
                name="fullname"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Full Name!',

                    }]}
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
                        message: 'Please input your password!',
                    },
                    {
                        min: 6,
                        message: 'Password must be at least 6 characters long!'
                    }
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="dateOfBirth"
                label="Date of birth"
                {...config}
            >
                <DatePicker />
            </Form.Item>

            <Form.Item
                label="Position"
                name="position"
                rules={[
                    {
                        required: true,
                        message: 'Please input your position!',
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
        </FormCustom>
    );
};

export {RegistrationForm};
