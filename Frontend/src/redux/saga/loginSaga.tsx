import {put, call, takeEvery} from 'redux-saga/effects';
import {POST_LOGIN} from "../store/actions/actionTypes";
import {login} from "../store/actions/loginCreator";
import {postLoginApi} from "./API";
import {errorNotification, successNotification} from "../../containers/ServerResponseHandlers/Notification";
import {destroyMessage} from "../../containers/ServerResponseHandlers/Message";
import {LoginFormValue, UserDataType} from "../store/reducers/loginReducer";

type ResponseLoginType = {
    data: UserDataType
    status: number
    loginFormValues: LoginFormValue
}

function* postLoginWorker({loginFormValues}: any) {
    try {
        console.log(loginFormValues)
        const {data, status}: ResponseLoginType = yield call(postLoginApi, loginFormValues);

        if (status === 200) {
            localStorage.setItem('userData', JSON.stringify(data));
            destroyMessage();
            successNotification('Вы вошли в систему.', `Привет, ${data.fullname}!`);
            yield put(login(data));
        }

    } catch (e) {
        destroyMessage();
        errorNotification('Вход в систему невозможен.', e.response.data.message);
    }
}

function* loginWatcher() {
    yield takeEvery(POST_LOGIN, postLoginWorker)
}

export default loginWatcher;