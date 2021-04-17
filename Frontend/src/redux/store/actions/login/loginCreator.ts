import {
    CHANGE_KEY_DEPS_ON_PATH,
    LOGIN,
    LOGOUT,
    POST_LOGIN,
    RESTORE_PASSWORD,
    UPDATE_VALUES_LOGIN_FORM
} from 'redux/store/actions/actionTypes';
import {
    ValuesLoginForm,
    KeysType,
    RestorePasswordFormValue
} from 'common/interfaces/login';
import {
    ChangeKeyDepsOnPathType,
    LoginActionType,
    LogoutActionType,
    PostLoginActionType,
    RestorePasswordType,
    UpdateValuesLoginFormActionType
} from 'redux/store/actions/login/interfaces';

const postLogin = (loginFormValues: ValuesLoginForm): PostLoginActionType => ({
    type: POST_LOGIN,
    loginFormValues
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
    restorePasswordFormValue: RestorePasswordFormValue
): RestorePasswordType => ({
    type: RESTORE_PASSWORD,
    restorePasswordFormValue
});

export {
    login,
    logout,
    postLogin,
    updateValuesLoginForm,
    changeKeyDepsOnPath,
    restorePassword
};
