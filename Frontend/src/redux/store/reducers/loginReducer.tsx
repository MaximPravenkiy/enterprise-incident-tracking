import {
    LOGIN,
    LOGOUT,
    POST_LOGIN,
    UPDATE_VALUES_LOGIN_FORM
} from '../actions/actionTypes';

export type PostLoginActionType = {
    type: typeof POST_LOGIN;
    loginFormValues: LoginFormValue;
};

export type LoginActionType = {
    type: typeof LOGIN;
    userData: UserDataType;
};

export type UpdateValuesLoginFormActionType = {
    type: typeof UPDATE_VALUES_LOGIN_FORM;
    updatedValueLoginForm: LoginFormValue;
};

export type LogoutActionType = {
    type: typeof LOGOUT;
};

export type LoginType =
    | PostLoginActionType
    | LoginActionType
    | UpdateValuesLoginFormActionType
    | LogoutActionType;

export type LoginFormValue = {
    login: string;
    password: string;
    remember?: boolean;
};

export type UserDataType = {
    fullname: string;
    token: string;
    userId: string;
};

export type LoginInitialStateType = typeof initialState;

const initialState = {
    fullname: '',
    isAuth: false,
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
        default:
            return state;
    }
}

export default loginReducer;
