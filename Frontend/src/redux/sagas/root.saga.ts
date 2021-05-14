import { all } from 'redux-saga/effects';
import { incidentsWatcher, loginWatcher, registrationWatcher } from './index';

function* rootWatcher() {
    yield all([incidentsWatcher(), loginWatcher(), registrationWatcher()]);
}

export default rootWatcher;
