import {
    CHANGE_KEY_DEPS_ON_PATH,
    LOGIN,
    LOGOUT,
    POST_LOGIN,
    UPDATE_VALUES_LOGIN_FORM
} from 'redux/store/actions/actionTypes';

export interface PostLoginActionType {
    type: typeof POST_LOGIN;
    loginFormValues: LoginFormValue;
}

export interface LoginActionType {
    type: typeof LOGIN;
    userData: UserDataType;
}

export interface UpdateValuesLoginFormActionType {
    type: typeof UPDATE_VALUES_LOGIN_FORM;
    updatedValueLoginForm: LoginFormValue;
}

export interface LogoutActionType {
    type: typeof LOGOUT;
}

export interface ChangeKeyDepsOnPathType {
    type: typeof CHANGE_KEY_DEPS_ON_PATH;
    keyDepsOnPath: KeysType;
}

export type KeysType = '1' | '2';

export type LoginType =
    | PostLoginActionType
    | LoginActionType
    | UpdateValuesLoginFormActionType
    | LogoutActionType
    | ChangeKeyDepsOnPathType;

export interface LoginFormValue {
    login: string;
    password: string;
    remember?: boolean;
}

export interface UserDataType {
    fullname: string;
    token: string;
    userId: string;
}

export type LoginInitialStateType = typeof initialState;

const initialState = {
    fullname: '',
    isAuth: false,
    keyDepsOnPath: '1' as KeysType,
    login: '',
    password: '',
    remember: false,
    token: '',
    userId: ''
};

function loginReducer(
    state = initialState,
    action: LoginType
): LoginInitialStateType {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuth: true,
                ...action.userData
            };
        case UPDATE_VALUES_LOGIN_FORM:
            return {
                ...state,
                ...action.updatedValueLoginForm
            };
        case LOGOUT:
            return {
                ...state,
                isAuth: false
            };
        case CHANGE_KEY_DEPS_ON_PATH:
            return {
                ...state,
                keyDepsOnPath: action.keyDepsOnPath
            };
        default:
            return state;
    }
}

export default loginReducer;
