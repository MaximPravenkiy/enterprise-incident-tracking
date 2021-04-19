import React, { FC } from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { restorePassword } from 'redux/store/actions/login/loginCreator';
import { Dispatch } from 'redux';
import { RestorePasswordType } from 'redux/store/actions/login/interfaces';
import { RestorePasswordFormValue } from 'common/interfaces/login';
import {
    formItemLayout,
    tailFormItemLayout,
    configLogin,
    configPassword,
    configConfirmPassword
} from 'components/Main/Forms/ForgotPassword/data';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const ForgotPassword: FC<RouteComponentProps> = ({ history }) => {
    const dispatch = useDispatch<Dispatch<RestorePasswordType>>();

    const onFinish = (values: RestorePasswordFormValue) => {
        dispatch(restorePassword(values, history));
    };

    return (
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
};

export default withRouter(ForgotPassword);
