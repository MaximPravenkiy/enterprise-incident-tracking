import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { RestorePassword } from 'redux/actions/login/login.interfaces';
import { RestorePasswordFormValue } from 'common/types/login';
import { restorePassword } from 'redux/actions/login/login.actions';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import ForgotPasswordForm from './ForgotPasswordForm';

const ForgotPasswordFormContainer: FC<RouteComponentProps> = ({ history }) => {
    const dispatch = useDispatch<Dispatch<RestorePassword>>();

    const onFinish = (values: RestorePasswordFormValue) => {
        dispatch(
            restorePassword({ restorePasswordFormValue: values, history })
        );
    };

    return <ForgotPasswordForm onFinish={onFinish} />;
};

export default withRouter(ForgotPasswordFormContainer);
