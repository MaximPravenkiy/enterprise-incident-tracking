import { call, put, SagaReturnType, takeEvery } from 'redux-saga/effects';
import { postRegistrationApi } from 'redux/sagas/api/api';
import {
    destroyMessage,
    errorNotification,
    successNotification
} from 'common/services/notification.services';
import {
    POST_REGISTRATION,
    resetRegistrationForm
} from 'redux/actions/registration/registration.actions';
import { changeKeyDepsOnPath } from 'redux/actions/login/login.actions';
import { PostRegistrationAction } from 'redux/actions/registration/registration.interfaces';

type ResponseRegistrationType = SagaReturnType<typeof postRegistrationApi>;

function* postRegistrationWorker({
    registrationFormValues,
    history
}: PostRegistrationAction) {
    try {
        const response: ResponseRegistrationType = yield call(
            postRegistrationApi,
            registrationFormValues
        );

        if (response.status === 201) {
            destroyMessage();
            successNotification('Поздравляем!', response.data.message);
            yield put(resetRegistrationForm());
            yield put(changeKeyDepsOnPath({ keyDepsOnPath: '1' }));
            yield call(history.push, '/login');
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
