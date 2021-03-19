import {put, call, takeEvery} from 'redux-saga/effects';
import {POST_LOGIN} from "../store/actions/actionTypes";
import {login} from "../store/actions/loginCreator";
import {postLoginApi} from "./API";

function* postLoginWorker({values}: any): any {
    try {
        const response = yield call(postLoginApi, values);
        localStorage.setItem('userData', JSON.stringify(response.data));
        yield put(login(response.data));
    } catch (e) {
        console.log(e.response.data.message)
    }
}

function* loginWatcher() {
    yield takeEvery(POST_LOGIN, postLoginWorker)
}

export default loginWatcher;