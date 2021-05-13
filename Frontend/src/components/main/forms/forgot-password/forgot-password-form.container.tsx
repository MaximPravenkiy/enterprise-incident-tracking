import React, { FC, memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { RestorePassword } from 'redux/actions/login/login.interfaces';
import { RestorePasswordFormValue } from 'common/types/login';
import { restorePassword } from 'redux/actions/login/login.actions';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import ForgotPasswordForm from './forgot-password-form.component';

const ForgotPasswordFormContainer: FC<RouteComponentProps> = memo(
    ({ history }) => {
        const dispatch = useDispatch<Dispatch<RestorePassword>>();

        const onFinish = useCallback((values: RestorePasswordFormValue) => {
            dispatch(restorePassword(values, history));
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        return <ForgotPasswordForm onFinish={onFinish} />;
    }
);

export default withRouter(ForgotPasswordFormContainer);
