import { all } from 'redux-saga/effects';
import registrationWatcher from 'redux/store/sagas/registrationSaga';
import incidentsWatcher from 'redux/store/sagas/incidentSaga';
import loginWatcher from 'redux/store/sagas/loginSaga';

function* rootWatcher() {
    yield all([incidentsWatcher(), loginWatcher(), registrationWatcher()]);
}

export default rootWatcher;
