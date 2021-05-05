import { put, call, takeEvery, SagaReturnType } from 'redux-saga/effects';
import {
    login,
    resetLoginFormValue,
    POST_LOGIN,
    RESTORE_PASSWORD
} from 'redux/actions/login/login.actions';
import { postLoginApi, restorePasswordApi } from 'redux/sagas/api/api';
import {
    destroyLoadingMessage,
    errorNotification,
    successNotification
} from 'common/services/notification.services';
import {
    PostLoginAction,
    RestorePassword
} from 'redux/actions/login/login.interfaces';

type ResponseLoginType = SagaReturnType<typeof postLoginApi>;
type ResponseRestorePasswordType = SagaReturnType<typeof restorePasswordApi>;

function* postLoginWorker({
    payload: { loginFormValues, history }
}: PostLoginAction) {
    try {
        console.log(loginFormValues);
        const response: ResponseLoginType = yield call(
            postLoginApi,
            loginFormValues
        );

        if (response.status === 200) {
            const actionWithIncidents = 'Показать мои инциденты' as 'Показать мои инциденты';
            localStorage.setItem('actionWithIncidents', actionWithIncidents);
            localStorage.setItem(
                'userData',
                JSON.stringify(response.data.fullname)
            );
            localStorage.setItem(
                'tokens',
                JSON.stringify(response.data.tokens)
            );

            destroyLoadingMessage();
            successNotification(
                'Вы вошли в систему.',
                `Привет, ${response.data.fullname}!`
            );
            yield put(login({ fullname: response.data.fullname }));
            yield call(history.push, '/incidents');

            if (!loginFormValues.remember) {
                yield put(resetLoginFormValue());
            }
        }
    } catch (e) {
        destroyLoadingMessage();
        errorNotification(
            'Вход в систему невозможен.',
            e.response.data.message
        );
    }
}

function* restorePasswordWorker({
    payload: { restorePasswordFormValue, history }
}: RestorePassword) {
    try {
        const response: ResponseRestorePasswordType = yield call(
            restorePasswordApi,
            restorePasswordFormValue
        );

        if (response.status === 201) {
            destroyLoadingMessage();
            successNotification('Операция завершена.', response.data.message);
            yield call(history.push, '/login');
        }
    } catch (e) {
        destroyLoadingMessage();
        errorNotification(
            'Не удалось обновить пароль...',
            e.response.data.message
        );
    }
}

function* loginWatcher() {
    yield takeEvery(POST_LOGIN, postLoginWorker);
    yield takeEvery(RESTORE_PASSWORD, restorePasswordWorker);
}

export default loginWatcher;
