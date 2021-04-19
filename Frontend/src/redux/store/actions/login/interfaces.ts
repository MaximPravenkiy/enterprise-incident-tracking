import {
    CHANGE_KEY_DEPS_ON_PATH,
    LOGIN,
    LOGOUT,
    POST_LOGIN, RESTORE_PASSWORD,
    UPDATE_VALUES_LOGIN_FORM
} from 'redux/store/actions/actionTypes';
import {ValuesLoginForm, KeysType, UserData, RestorePasswordFormValue} from 'common/interfaces/login';
import {History} from "history";

export interface PostLoginActionType {
    type: typeof POST_LOGIN;
    loginFormValues: ValuesLoginForm;
}

export interface LoginActionType {
    type: typeof LOGIN;
    userData: string;
}

export interface UpdateValuesLoginFormActionType {
    type: typeof UPDATE_VALUES_LOGIN_FORM;
    updatedValueLoginForm: ValuesLoginForm;
}

export interface LogoutActionType {
    type: typeof LOGOUT;
}

export interface ChangeKeyDepsOnPathType {
    type: typeof CHANGE_KEY_DEPS_ON_PATH;
    keyDepsOnPath: KeysType;
}

export interface RestorePasswordType {
    type: typeof RESTORE_PASSWORD;
    restorePasswordFormValue: RestorePasswordFormValue;
    history: History<unknown>;
}

export type LoginType =
    | PostLoginActionType
    | LoginActionType
    | UpdateValuesLoginFormActionType
    | LogoutActionType
    | ChangeKeyDepsOnPathType;
