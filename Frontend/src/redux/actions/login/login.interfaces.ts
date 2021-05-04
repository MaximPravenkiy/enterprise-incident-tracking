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

export interface PostLoginActionType {
    type: typeof POST_LOGIN;
    payload: {
        loginFormValues: ValuesLoginForm;
        history: History<unknown>;
    };
}

export interface LoginActionType {
    type: typeof LOGIN;
    payload: { fullname: string };
}

export interface UpdateValuesLoginFormActionType {
    type: typeof UPDATE_VALUES_LOGIN_FORM;
    payload: { updatedValueLoginForm: ValuesLoginForm };
}

export interface LogoutActionType {
    type: typeof LOGOUT;
}

export interface ChangeKeyDepsOnPathType {
    type: typeof CHANGE_KEY_DEPS_ON_PATH;
    payload: { keyDepsOnPath: KeysType };
}

export interface RestorePasswordType {
    type: typeof RESTORE_PASSWORD;
    payload: {
        restorePasswordFormValue: RestorePasswordFormValue;
        history: History<unknown>;
    };
}

export interface ResetLoginFormValuesType {
    type: typeof RESET_LOGIN_FORM_VALUES;
}

export type LoginType =
    | PostLoginActionType
    | LoginActionType
    | UpdateValuesLoginFormActionType
    | LogoutActionType
    | ChangeKeyDepsOnPathType
    | ResetLoginFormValuesType;
