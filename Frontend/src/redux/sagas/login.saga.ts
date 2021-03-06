import { put, call, takeEvery, SagaReturnType } from 'redux-saga/effects';
import {
    resetLoginFormValue,
    POST_LOGIN,
    RESTORE_PASSWORD
} from 'redux/actions/login/login.actions';
import {
    destroyLoadingMessage,
    errorNotification,
    openLoadingMessage,
    successNotification
} from 'common/services/notification.services';
import {
    PostLoginAction,
    RestorePassword
} from 'redux/actions/login/login.interfaces';
import {
    login,
    logout,
    ON_LOGOUT
} from 'redux/actions/user-info/user-info.actions';
import { decode } from 'jsonwebtoken';
import { DecodeAccessToken } from 'common/types/login';
import { postLoginApi, restorePasswordApi } from './api/api';
import { showOwnIncidents } from '../actions/incidents/incidents.actions';

type ResponseLoginType = SagaReturnType<typeof postLoginApi>;
type ResponseRestorePasswordType = SagaReturnType<typeof restorePasswordApi>;

function* postLoginWorker({
    payload: { loginFormValues, history }
}: PostLoginAction) {
    try {
        openLoadingMessage('Проверяем данные...');

        const response: ResponseLoginType = yield call(
            postLoginApi,
            loginFormValues
        );

        if (response.status === 200) {
            const { accessToken } = response.data.tokens;
            const { fullname } = decode(accessToken) as DecodeAccessToken;
            localStorage.setItem('isOwnIncidents', JSON.stringify(true));
            localStorage.setItem(
                'tokens',
                JSON.stringify(response.data.tokens)
            );

            destroyLoadingMessage();
            successNotification('Вы вошли в систему.', `Привет, ${fullname}!`);
            yield put(login(fullname));
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
        openLoadingMessage('Проверяем данные...');

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

function* logoutWorker() {
    localStorage.clear();
    yield put(logout());
    yield put(showOwnIncidents());
}

function* loginWatcher() {
    yield takeEvery(POST_LOGIN, postLoginWorker);
    yield takeEvery(RESTORE_PASSWORD, restorePasswordWorker);
    yield takeEvery(ON_LOGOUT, logoutWorker);
}

export default loginWatcher;
