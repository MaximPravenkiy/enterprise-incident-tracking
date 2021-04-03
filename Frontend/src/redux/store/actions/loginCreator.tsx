import {
    CHANGE_KEY_DEPS_ON_PATH,
    LOGIN,
    LOGOUT,
    POST_LOGIN,
    UPDATE_VALUES_LOGIN_FORM
} from './actionTypes';
import {
    ChangeKeyDepsOnPathType,
    KeysType,
    LoginActionType,
    LoginFormValue,
    LogoutActionType,
    PostLoginActionType,
    UpdateValuesLoginFormActionType
} from '../reducers/loginReducer';

const postLogin = (loginFormValues: LoginFormValue): PostLoginActionType => ({
    type: POST_LOGIN,
    loginFormValues
});

const login = (userData: LoginActionType['userData']): LoginActionType => ({
    type: LOGIN,
    userData
});

const updateValuesLoginForm = (
    updatedValueLoginForm: LoginFormValue
): UpdateValuesLoginFormActionType => ({
    type: UPDATE_VALUES_LOGIN_FORM,
    updatedValueLoginForm
});

const changeKeyDepsOnPath = (
    keyDepsOnPath: KeysType
): ChangeKeyDepsOnPathType => ({
    type: CHANGE_KEY_DEPS_ON_PATH,
    keyDepsOnPath
});

const logout = (): LogoutActionType => ({ type: LOGOUT });

export { login, logout, postLogin, updateValuesLoginForm, changeKeyDepsOnPath };
