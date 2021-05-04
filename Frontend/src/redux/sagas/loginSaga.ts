import { put, call, takeEvery, SagaReturnType } from 'redux-saga/effects';
import {
    login,
    resetLoginFormValue,
    POST_LOGIN,
    RESTORE_PASSWORD
} from 'redux/actions/login/login.actions';
import { postLoginApi, restorePasswordApi } from 'redux/sagas/api/api';
import {
    destroyMessage,
    errorNotification,
    successNotification
} from 'common/services/notification.services';
import {
    PostLoginActionType,
    RestorePasswordType
} from 'redux/actions/login/login.interfaces';

type ResponseLoginType = SagaReturnType<typeof postLoginApi>;
type ResponseRestorePasswordType = SagaReturnType<typeof restorePasswordApi>;

function* postLoginWorker({ loginFormValues, history }: PostLoginActionType) {
    try {
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

            destroyMessage();
            successNotification(
                'Вы вошли в систему.',
                `Привет, ${response.data.fullname}!`
            );
            yield put(login(response.data.fullname));
            yield call(history.push, '/incidents');

            if (!loginFormValues.remember) {
                yield put(resetLoginFormValue());
            }
        }
    } catch (e) {
        destroyMessage();
        errorNotification(
            'Вход в систему невозможен.',
            e.response.data.message
        );
    }
}

function* restorePasswordWorker({
    restorePasswordFormValue,
    history
}: RestorePasswordType) {
    try {
        const response: ResponseRestorePasswordType = yield call(
            restorePasswordApi,
            restorePasswordFormValue
        );

        if (response.status === 201) {
            destroyMessage();
            successNotification('Операция завершена.', response.data.message);
            yield call(history.push, '/login');
        }
    } catch (e) {
        destroyMessage();
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
