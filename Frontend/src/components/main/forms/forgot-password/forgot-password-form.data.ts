import { NamePath, StoreValue } from 'antd/lib/form/interface';
import { RuleObject } from 'antd/es/form';

interface GetFieldValue {
    getFieldValue: (name: NamePath) => any;
}

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 24 },
        md: { span: 13, pull: 2 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
        md: { span: 11, pull: 2 }
    }
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: { offset: 0 },
        md: { offset: 11 }
    }
};

const configLogin = {
    label: 'Enter your login',
    name: 'login',
    rules: [{ required: true, message: 'Please input your login!' }]
};

const configPassword = {
    name: 'password',
    label: 'Create a new Password',
    rules: [
        {
            min: 6,
            message: 'Password must be at least 6 characters long!'
        },
        {
            required: true,
            message: 'Please input your Password!'
        }
    ],
    hasFeedback: true
};

const configConfirmPassword = {
    name: 'confirmPassword',
    label: 'Confirm new Password',
    dependencies: ['password'],
    hasFeedback: true,
    rules: [
        {
            required: true,
            message: 'Please confirm your Password!'
        },
        ({ getFieldValue }: GetFieldValue) => ({
            validator(_: RuleObject, value: StoreValue) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }
                return Promise.reject(new Error('Passwords do not match!'));
            }
        })
    ]
};

export {
    formItemLayout,
    tailFormItemLayout,
    configLogin,
    configPassword,
    configConfirmPassword
};
