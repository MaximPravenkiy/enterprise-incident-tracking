import { all } from 'redux-saga/effects';
import registrationWatcher from 'redux/sagas/registrationSaga';
import incidentsWatcher from 'redux/sagas/incidentSaga';
import loginWatcher from 'redux/sagas/loginSaga';

function* rootWatcher() {
    yield all([incidentsWatcher(), loginWatcher(), registrationWatcher()]);
}

export default rootWatcher;
