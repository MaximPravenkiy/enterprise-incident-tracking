import React, { FC } from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { restorePassword } from 'redux/actions/login/loginCreator';
import { Dispatch } from 'redux';
import { RestorePasswordType } from 'redux/actions/login/interfaces';
import { RestorePasswordFormValue } from 'common/types/login';
import {
    formItemLayout,
    tailFormItemLayout,
    configLogin,
    configPassword,
    configConfirmPassword
} from 'components/Main/Forms/ForgotPassword/ForgotPasswordForm.data';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { openMessage } from 'common/serverResponseHandlers/message';

const ForgotPasswordForm: FC<RouteComponentProps> = ({ history }) => {
    const dispatch = useDispatch<Dispatch<RestorePasswordType>>();

    const onFinish = (values: RestorePasswordFormValue) => {
        openMessage('Проверяем данные...');
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

export default withRouter(ForgotPasswordForm);