import { put, call, takeEvery, SagaReturnType } from 'redux-saga/effects';
import { POST_LOGIN } from 'redux/store/actions/actionTypes';
import { login } from 'redux/store/actions/login/loginCreator';
import { postLoginApi } from 'redux/store/sagas/API';
import {
    errorNotification,
    successNotification
} from 'common/ServerResponseHandlers/Notification';
import { destroyMessage } from 'common/ServerResponseHandlers/Message';
import { PostLoginActionType } from 'redux/store/actions/login/interfaces';

type ResponseLoginType = SagaReturnType<typeof postLoginApi>;

function* postLoginWorker({ loginFormValues }: PostLoginActionType) {
    try {
        const response: ResponseLoginType = yield call(
            postLoginApi,
            loginFormValues
        );

        if (response.status === 200) {
            const actionWithIncidents = 'Показать мои инциденты' as 'Показать мои инциденты';
            localStorage.setItem('actionWithIncidents', actionWithIncidents);
            localStorage.setItem('userData', JSON.stringify(response.data));

            destroyMessage();
            successNotification(
                'Вы вошли в систему.',
                `Привет, ${response.data.fullname}!`
            );
            yield put(login(response.data));
        }
    } catch (e) {
        destroyMessage();
        errorNotification(
            'Вход в систему невозможен.',
            e.response.data.message
        );
    }
}

function* loginWatcher() {
    yield takeEvery(POST_LOGIN, postLoginWorker);
}

export default loginWatcher;
