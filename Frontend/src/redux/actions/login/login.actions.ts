import { KeysType, ValuesLoginForm } from 'common/types/login';
import {
    ChangeKeyDepsOnPathType,
    LoginActionType,
    LogoutActionType,
    PostLoginActionType,
    ResetLoginFormValuesType,
    RestorePasswordType,
    UpdateValuesLoginFormActionType
} from 'redux/actions/login/login.interfaces';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const RESET_LOGIN_FORM_VALUES = 'RESET_LOGIN_FORM_VALUES';
const POST_LOGIN = 'POST_LOGIN';
const UPDATE_VALUES_LOGIN_FORM = 'UPDATE_VALUES_LOGIN_FORM';
const CHANGE_KEY_DEPS_ON_PATH = 'CHANGE_KEY_DEPS_ON_PATH';
const RESTORE_PASSWORD = 'RESTORE_PASSWORD';

const postLogin = (
    payload: PostLoginActionType['payload']
): PostLoginActionType => ({
    type: POST_LOGIN,
    payload
});

const login = (payload: { fullname: string }): LoginActionType => ({
    type: LOGIN,
    payload
});

const updateValuesLoginForm = (payload: {
    updatedValueLoginForm: ValuesLoginForm;
}): UpdateValuesLoginFormActionType => ({
    type: UPDATE_VALUES_LOGIN_FORM,
    payload
});

const changeKeyDepsOnPath = (payload: {
    keyDepsOnPath: KeysType;
}): ChangeKeyDepsOnPathType => ({
    type: CHANGE_KEY_DEPS_ON_PATH,
    payload
});

const logout = (): LogoutActionType => ({ type: LOGOUT });

const restorePassword = (
    payload: RestorePasswordType['payload']
): RestorePasswordType => ({
    type: RESTORE_PASSWORD,
    payload
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
