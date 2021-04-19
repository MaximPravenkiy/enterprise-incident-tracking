import { NamePath, StoreValue } from 'antd/lib/form/interface';
import { RuleObject } from 'antd/es/form';

interface GetFieldValue {
    getFieldValue: (name: NamePath) => any;
}

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

const configLogin = {
    label: 'To recover your password, enter your Login',
    name: 'login',
    rules: [{ required: true, message: 'Please input your Login!' }]
};

const configPassword = {
    name: 'password',
    label: 'Create and enter a new Password',
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
