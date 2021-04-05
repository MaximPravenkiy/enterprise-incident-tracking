import {
    CHANGE_KEY_DEPS_ON_PATH,
    LOGIN,
    LOGOUT,
    POST_LOGIN,
    UPDATE_VALUES_LOGIN_FORM
} from 'redux/store/actions/actionTypes';
import { IValuesLoginForm, KeysType } from 'common/interfaces/login';
import {
    ChangeKeyDepsOnPathType,
    LoginActionType,
    LogoutActionType,
    PostLoginActionType,
    UpdateValuesLoginFormActionType
} from 'redux/store/actions/login/interfaces';

const postLogin = (loginFormValues: IValuesLoginForm): PostLoginActionType => ({
    type: POST_LOGIN,
    loginFormValues
});

const login = (userData: LoginActionType['userData']): LoginActionType => ({
    type: LOGIN,
    userData
});

const updateValuesLoginForm = (
    updatedValueLoginForm: IValuesLoginForm
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