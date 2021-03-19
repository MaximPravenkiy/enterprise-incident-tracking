import {all} from 'redux-saga/effects';
import incidentsWatcher from "./incidentSaga";
import loginWatcher from "./loginSaga";

function* rootWatcher() {
    yield all([incidentsWatcher(), loginWatcher()]);
}

export default rootWatcher;