import {call, put, takeEvery} from 'redux-saga/effects';
import {POST_REGISTRATION} from "../store/actions/actionTypes";
import {postRegistrationApi} from "./API";
import {destroyMessage} from "../../containers/ServerResponseHandlers/Message";
import {errorNotification, successNotification} from "../../containers/ServerResponseHandlers/Notification";
import {resetRegistrationForm} from "../store/actions/registrationCreator";

function* postRegistrationWorker({registrationFormValues}: any) {
    try {
        const {data, status} = yield call(postRegistrationApi, registrationFormValues);

        if (status === 201) {
            destroyMessage();
            successNotification('Поздравляем!', data.message);
            yield put(resetRegistrationForm());
        }
    } catch (e) {
        destroyMessage();
        errorNotification('К сожалению, регистрация не удалась...', e.response.data.message);
    }
}

function* registrationWatcher() {
    yield takeEvery(POST_REGISTRATION, postRegistrationWorker);
}

export default registrationWatcher;

