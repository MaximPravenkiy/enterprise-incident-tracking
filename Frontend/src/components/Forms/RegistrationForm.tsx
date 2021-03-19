import React from 'react';
import {
    Form,
    Input,
    Button,
    DatePicker,
} from 'antd';
import styled from 'styled-components';
// import {useDispatch, useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {postRegistration} from "../../redux/store/actions/registrationCreator";

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
    rules: [{ type: 'object' as const, required: true, message: 'Please select your Date of birth!' }],
};

const FormCustom = styled(Form)`
   min-width: 35%;
`

const RegistrationForm = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    // const {login, password, dateOfBirth, position}: any = useSelector(({registrationReducer}: any) => registrationReducer);
    // const dispatch = useDispatch();

    const onRegisterNewUser = async (values: any) => {
        console.log('Received values of form: ', values);
        // try {
        //     const response = await axios.post(
        //         '/registration',
        //         values
        //     );
        //     console.log(response)
        // } catch (e) {
        //     console.log(e.response.data.message)
        // }
        dispatch(postRegistration(values));
    };

    const update = (changedFields: any, allFields: any) => {
        // console.log(changedFields[0].value, allFields)
    }

    return (
        <FormCustom
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onRegisterNewUser}
            scrollToFirstError
            onFieldsChange={update}
        >
            <Form.Item
                label="Full Name"
                name="fullname"
                rules={[{ required: true, message: 'Please input your Full Name!' }]}
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
                        message: 'Please input your Date of birth!',
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
