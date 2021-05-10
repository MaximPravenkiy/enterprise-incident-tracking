import { call, put, SagaReturnType, takeEvery } from 'redux-saga/effects';
import {
    destroyLoadingMessage,
    errorNotification,
    openLoadingMessage,
    successNotification
} from 'common/services/notification.services';
import {
    POST_REGISTRATION,
    resetRegistrationForm
} from 'redux/actions/registration/registration.actions';
import { PostRegistrationAction } from 'redux/actions/registration/registration.interfaces';
import { postRegistrationApi } from './api/api';

type ResponseRegistrationType = SagaReturnType<typeof postRegistrationApi>;

function* postRegistrationWorker({
    registrationFormValues,
    history
}: PostRegistrationAction) {
    try {
        openLoadingMessage('Проверяем данные...');

        const response: ResponseRegistrationType = yield call(
            postRegistrationApi,
            registrationFormValues
        );

        if (response.status === 201) {
            destroyLoadingMessage();
            successNotification('Поздравляем!', response.data.message);
            yield put(resetRegistrationForm());
            yield call(history.push, '/login');
        }
    } catch (e) {
        destroyLoadingMessage();
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
