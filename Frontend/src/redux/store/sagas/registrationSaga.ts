import { call, put, SagaReturnType, takeEvery } from 'redux-saga/effects';
import { POST_REGISTRATION } from 'redux/store/actions/actionTypes';
import { postRegistrationApi } from 'redux/store/sagas/API';
import { destroyMessage } from 'common/ServerResponseHandlers/Message';
import {
    errorNotification,
    successNotification
} from 'common/ServerResponseHandlers/Notification';
import { resetRegistrationForm } from 'redux/store/actions/registration/registrationCreator';
import { changeKeyDepsOnPath } from 'redux/store/actions/login/loginCreator';
import { PostRegistrationActionType } from 'redux/store/actions/registration/interfaces';

type ResponseRegistrationType = SagaReturnType<typeof postRegistrationApi>;

function* postRegistrationWorker({
    registrationFormValues
}: PostRegistrationActionType) {
    try {
        const response: ResponseRegistrationType = yield call(
            postRegistrationApi,
            registrationFormValues
        );

        if (response.status === 201) {
            destroyMessage();
            successNotification('Поздравляем!', response.data.message);
            yield put(resetRegistrationForm());
            yield put(changeKeyDepsOnPath('1'));
        }
    } catch (e) {
        destroyMessage();
        errorNotification(
            'К сожалению, регистрация не удалась...',
            e.response.data.message
        );
    }
}

function* registrationWatcher() {
    yield takeEvery(POST_REGISTRATION, postRegistrationWorker);
}

export default registrationWatcher;
