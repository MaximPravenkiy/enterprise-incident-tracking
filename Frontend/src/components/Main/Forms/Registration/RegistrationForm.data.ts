export const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 24 },
        md: { span: 12, pull: 4 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
        md: { span: 12, pull: 4 }
    }
};

export const tailFormItemLayout = {
    wrapperCol: {
        xs: { offset: 0 },
        md: { offset: 8 }
    }
};

export const configDateOfBirth = {
    name: 'dateOfBirth',
    label: 'Date of birth',
    rules: [
        {
            type: 'object' as const,
            required: true,
            message: 'Please select your Date of birth!'
        }
    ]
};

export const configFullname = {
    label: 'Full Name',
    name: 'fullname',
    rules: [
        {
            required: true,
            message: 'Please input your Full Name!'
        },
        {
            pattern: /^[a-zA-Z\s]*$/,
            message: 'Field must contain only letters and spaces!'
        }
    ]
};

export const configLogin = {
    label: 'Login',
    name: 'login',
    rules: [
        {
            required: true,
            message: 'Please input your Login!'
        },
        {
            pattern: /^\S*$/,
            message: "Field can't contain spaces!"
        }
    ]
};

export const configPassword = {
    label: 'Password',
    name: 'password',
    rules: [
        {
            required: true,
            message: 'Please input your password!'
        },
        {
            min: 6,
            message: 'Password must be at least 6 characters long!'
        }
    ]
};

export const configPosition = {
    label: 'Position',
    name: 'position',
    rules: [
        {
            required: true,
            message: 'Please input your position!'
        }
    ]
};
