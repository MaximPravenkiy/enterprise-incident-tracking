import {
    ValuesLoginForm,
    KeysType,
    RestorePasswordFormValue
} from 'common/types/login';
import { History } from 'history';
import {
    CHANGE_KEY_DEPS_ON_PATH,
    RESTORE_PASSWORD,
    LOGIN,
    UPDATE_VALUES_LOGIN_FORM,
    POST_LOGIN,
    RESET_LOGIN_FORM_VALUES,
    LOGOUT
} from './login.actions';

interface PostLoginAction {
    type: typeof POST_LOGIN;
    payload: {
        loginFormValues: ValuesLoginForm;
        history: History<unknown>;
    };
}

interface LoginAction {
    type: typeof LOGIN;
    payload: { fullname: string };
}

interface UpdateValuesLoginFormAction {
    type: typeof UPDATE_VALUES_LOGIN_FORM;
    payload: { updatedValueLoginForm: ValuesLoginForm };
}

interface LogoutAction {
    type: typeof LOGOUT;
}

interface ChangeKeyDepsOnPath {
    type: typeof CHANGE_KEY_DEPS_ON_PATH;
    payload: { keyDepsOnPath: KeysType };
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
    | LoginAction
    | UpdateValuesLoginFormAction
    | LogoutAction
    | ChangeKeyDepsOnPath
    | ResetLoginFormValues
    | RestorePassword;

export type {
    LoginActions,
    PostLoginAction,
    LoginAction,
    UpdateValuesLoginFormAction,
    LogoutAction,
    ChangeKeyDepsOnPath,
    ResetLoginFormValues,
    RestorePassword
};
