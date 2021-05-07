import { RestorePasswordFormValue, ValuesLoginForm } from 'common/types/login';
import { History } from 'history';
import {
    POST_LOGIN,
    RESET_LOGIN_FORM_VALUES,
    RESTORE_PASSWORD,
    UPDATE_VALUES_LOGIN_FORM
} from './login.actions';

interface PostLoginAction {
    type: typeof POST_LOGIN;
    payload: {
        loginFormValues: ValuesLoginForm;
        history: History<unknown>;
    };
}

interface UpdateValuesLoginFormAction {
    type: typeof UPDATE_VALUES_LOGIN_FORM;
    payload: { updatedValueLoginForm: ValuesLoginForm };
}

interface RestorePassword {
    type: typeof RESTORE_PASSWORD;
    payload: {
        restorePasswordFormValue: RestorePasswordFormValue;
        history: History<unknown>;
    };
}

interface ResetLoginFormValues {
    type: typeof RESET_LOGIN_FORM_VALUES;
}

type LoginActions =
    | PostLoginAction
    | UpdateValuesLoginFormAction
    | ResetLoginFormValues
    | RestorePassword;

export type {
    LoginActions,
    PostLoginAction,
    UpdateValuesLoginFormAction,
    ResetLoginFormValues,
    RestorePassword
};
