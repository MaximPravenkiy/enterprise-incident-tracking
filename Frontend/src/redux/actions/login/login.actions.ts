import { RestorePasswordFormValue, ValuesLoginForm } from 'common/types/login';
import {
    PostLoginAction,
    ResetLoginFormValues,
    RestorePassword,
    UpdateValuesLoginFormAction
} from 'redux/actions/login/login.interfaces';
import { History } from 'history';

const RESET_LOGIN_FORM_VALUES = 'RESET_LOGIN_FORM_VALUES';
const POST_LOGIN = 'POST_LOGIN';
const UPDATE_VALUES_LOGIN_FORM = 'UPDATE_VALUES_LOGIN_FORM';
const CHANGE_KEY_DEPS_ON_PATH = 'CHANGE_KEY_DEPS_ON_PATH';
const RESTORE_PASSWORD = 'RESTORE_PASSWORD';

const postLogin = (
    loginFormValues: ValuesLoginForm,
    history: History<unknown>
): PostLoginAction => ({
    type: POST_LOGIN,
    payload: { loginFormValues, history }
});

const updateValuesLoginForm = (
    updatedValueLoginForm: ValuesLoginForm
): UpdateValuesLoginFormAction => ({
    type: UPDATE_VALUES_LOGIN_FORM,
    payload: { updatedValueLoginForm }
});

const restorePassword = (
    restorePasswordFormValue: RestorePasswordFormValue,
    history: History<unknown>
): RestorePassword => ({
    type: RESTORE_PASSWORD,
    payload: { restorePasswordFormValue, history }
});

const resetLoginFormValue = (): ResetLoginFormValues => ({
    type: RESET_LOGIN_FORM_VALUES
});

export {
    postLogin,
    updateValuesLoginForm,
    restorePassword,
    resetLoginFormValue,
    RESTORE_PASSWORD,
    CHANGE_KEY_DEPS_ON_PATH,
    POST_LOGIN,
    RESET_LOGIN_FORM_VALUES,
    UPDATE_VALUES_LOGIN_FORM
};
