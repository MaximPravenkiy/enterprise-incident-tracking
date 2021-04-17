import { put, call, takeEvery, SagaReturnType } from 'redux-saga/effects';
import { POST_LOGIN, RESTORE_PASSWORD } from 'redux/store/actions/actionTypes';
import { login } from 'redux/store/actions/login/loginCreator';
import { postLoginApi, restorePasswordApi } from 'redux/store/sagas/API';
import {
    errorNotification,
    successNotification
} from 'common/serverResponseHandlers/notification';
import { destroyMessage } from 'common/serverResponseHandlers/message';
import {
    PostLoginActionType,
    RestorePasswordType
} from 'redux/store/actions/login/interfaces';

type ResponseLoginType = SagaReturnType<typeof postLoginApi>;
type ResponseRestorePasswordType = SagaReturnType<typeof restorePasswordApi>;

function* postLoginWorker({ loginFormValues }: PostLoginActionType) {
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
    restorePasswordFormValue
}: RestorePasswordType) {
    try {
        const response: ResponseRestorePasswordType = yield call(
            restorePasswordApi,
            restorePasswordFormValue
        );
        console.log(response.data.message);
        successNotification('Операция завершена', response.data.message);
    } catch (e) {
        console.log(e.response.data.message);
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
