import {
    CHANGE_KEY_DEPS_ON_PATH,
    LOGIN,
    LOGOUT,
    POST_LOGIN,
    UPDATE_VALUES_LOGIN_FORM
} from 'redux/store/actions/actionTypes';
import { ValuesLoginForm, KeysType, UserData } from 'common/interfaces/login';

export interface PostLoginActionType {
    type: typeof POST_LOGIN;
    loginFormValues: ValuesLoginForm;
}

export interface LoginActionType {
    type: typeof LOGIN;
    userData: UserData;
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

export type LoginType =
    | PostLoginActionType
    | LoginActionType
    | UpdateValuesLoginFormActionType
    | LogoutActionType
    | ChangeKeyDepsOnPathType;
