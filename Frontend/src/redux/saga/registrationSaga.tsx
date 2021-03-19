import {put, call, takeEvery} from 'redux-saga/effects';
import {POST_REGISTRATION} from "../store/actions/actionTypes";
import {postRegistrationApi} from "./API";

function* postRegistrationWorker({values}: any): any {
    try {
        const response = yield call(postRegistrationApi, values);
        console.log(response);
    } catch (e) {
        console.log(e.response.data.message);
    }
}

function* registrationWatcher() {
    yield takeEvery(POST_REGISTRATION, postRegistrationWorker);
}

export default registrationWatcher;

