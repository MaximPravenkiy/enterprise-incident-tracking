import {
    KeysType,
    RestorePasswordFormValue,
    ValuesLoginForm
} from 'common/types/login';
import {
    ChangeKeyDepsOnPathType,
    LoginActionType,
    LogoutActionType,
    PostLoginActionType,
    ResetLoginFormValuesType,
    RestorePasswordType,
    UpdateValuesLoginFormActionType
} from 'redux/actions/login/login.interfaces';
import { History } from 'history';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const RESET_LOGIN_FORM_VALUES = 'RESET_LOGIN_FORM_VALUES';
const POST_LOGIN = 'POST_LOGIN';
const UPDATE_VALUES_LOGIN_FORM = 'UPDATE_VALUES_LOGIN_FORM';
const CHANGE_KEY_DEPS_ON_PATH = 'CHANGE_KEY_DEPS_ON_PATH';
const RESTORE_PASSWORD = 'RESTORE_PASSWORD';

const postLogin = (
    loginFormValues: ValuesLoginForm,
    history: History<unknown>
): PostLoginActionType => ({
    type: POST_LOGIN,
    loginFormValues,
    history
});

const login = (userData: string): LoginActionType => ({
    type: LOGIN,
    userData
});

const updateValuesLoginForm = (
    updatedValueLoginForm: ValuesLoginForm
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

const restorePassword = (
    restorePasswordFormValue: RestorePasswordFormValue,
    history: History<unknown>
): RestorePasswordType => ({
    type: RESTORE_PASSWORD,
    restorePasswordFormValue,
    history
});

const resetLoginFormValue = (): ResetLoginFormValuesType => ({
    type: RESET_LOGIN_FORM_VALUES
});

export {
    login,
    logout,
    postLogin,
    updateValuesLoginForm,
    changeKeyDepsOnPath,
    restorePassword,
    resetLoginFormValue,
    RESTORE_PASSWORD,
    CHANGE_KEY_DEPS_ON_PATH,
    POST_LOGIN,
    RESET_LOGIN_FORM_VALUES,
    LOGOUT,
    LOGIN,
    UPDATE_VALUES_LOGIN_FORM
};
