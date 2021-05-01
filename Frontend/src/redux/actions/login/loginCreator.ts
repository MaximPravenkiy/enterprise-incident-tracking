import {
    CHANGE_KEY_DEPS_ON_PATH,
    LOGIN,
    LOGOUT,
    POST_LOGIN,
    RESET_LOGIN_FORM_VALUES,
    RESTORE_PASSWORD,
    UPDATE_VALUES_LOGIN_FORM
} from 'redux/actions/actionTypes';
import {
    ValuesLoginForm,
    KeysType,
    RestorePasswordFormValue
} from 'common/types/login';
import {
    ChangeKeyDepsOnPathType,
    LoginActionType,
    LogoutActionType,
    PostLoginActionType,
    ResetLoginFormValuesType,
    RestorePasswordType,
    UpdateValuesLoginFormActionType
} from 'redux/actions/login/interfaces';
import { History } from 'history';

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
    resetLoginFormValue
};