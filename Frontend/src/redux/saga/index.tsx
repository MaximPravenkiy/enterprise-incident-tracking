import { all } from 'redux-saga/effects';
import incidentsWatcher from './incidentSaga';
import loginWatcher from './loginSaga';
import registrationWatcher from './registrationSaga';

function* rootWatcher() {
    yield all([incidentsWatcher(), loginWatcher(), registrationWatcher()]);
}

export default rootWatcher;
