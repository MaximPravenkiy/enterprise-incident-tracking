import { put, call, takeEvery, SagaReturnType } from 'redux-saga/effects';
import { POST_LOGIN } from '../store/actions/actionTypes';
import { login } from '../store/actions/loginCreator';
import { postLoginApi } from './API';
import {
    errorNotification,
    successNotification
} from '../../containers/ServerResponseHandlers/Notification';
import { destroyMessage } from '../../containers/ServerResponseHandlers/Message';
import { PostLoginActionType } from '../store/reducers/loginReducer';

type ResponseLoginType = SagaReturnType<typeof postLoginApi>;

function* postLoginWorker({ loginFormValues }: PostLoginActionType) {
    try {
        const response: ResponseLoginType = yield call(
            postLoginApi,
            loginFormValues
        );

        if (response.status === 200) {
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
