import React from 'react';
import { put, call, takeEvery, SagaReturnType } from 'redux-saga/effects';
import PriorityIcon from 'common/PriorityIcon';
import {
    getIncidents,
    resetCreateIncidentForm,
    setIncidents,
    setUsers,
    updateLoader
} from 'redux/store/actions/incidentsCreator';
import {
    CREATE_INCIDENT,
    DELETE_INCIDENT,
    GET_INCIDENTS,
    GET_USERS,
    UPDATE_INCIDENT
} from 'redux/store/actions/actionTypes';
import { logout } from 'redux/store/actions/loginCreator';
import {
    errorNotification,
    successNotification
} from 'common/ServerResponseHandlers/Notification';
import { destroyMessage } from 'common/ServerResponseHandlers/Message';
import {
    CreateIncidentActionType,
    DeleteIncidentActionType,
    UpdateIncidentActionType
} from 'redux/store/reducers/incidentsReducer';
import {
    deleteIncidentApi,
    getAllIncidentsApi,
    getMyIncidentsApi,
    getUsersForAssigneeOptionApi,
    postIncidentApi,
    updateIncidentApi
} from 'redux/store/sagas/API';

type ResponseGetIncidentsType = SagaReturnType<typeof getMyIncidentsApi>;
type ResponseGetUsersForAssigneeType = SagaReturnType<
    typeof getUsersForAssigneeOptionApi
>;
type ResponseCreateIncidentType = SagaReturnType<typeof postIncidentApi>;
type ResponseDeleteIncident = SagaReturnType<typeof deleteIncidentApi>;
type ResponseUpdateIncident = SagaReturnType<typeof updateIncidentApi>;

function* getInicdentsWorker() {
    try {
        yield put(updateLoader(true));
        const actionWithIncidents = localStorage.getItem('actionWithIncidents');
        let response: ResponseGetIncidentsType;

        if (actionWithIncidents === 'Показать мои инциденты') {
            const userData = localStorage.getItem('userData');

            if (!userData) return;

            const { token } = JSON.parse(userData);
            response = yield call(getMyIncidentsApi, token);
        } else {
            response = yield call(getAllIncidentsApi);
        }

        if (response.status === 200) {
            const listOfIncidents = response.data.map((incident: any) => ({
                ...incident,
                key: incident._id,
                icon: <PriorityIcon priority={incident.priority} />,
                startDate: incident.startDate.split('T')[0],
                dueDate: incident.dueDate.split('T')[0]
            }));

            yield put(setIncidents(listOfIncidents));
            yield put(updateLoader(false));
        }
    } catch (e) {
        errorNotification(
            'Не удалось выполнить операцию...',
            e.response.data.message
        );
        localStorage.removeItem('userData');
        if (e.response.status === 401) {
            yield put(logout());
        }
    }
}

function* getUsersForAssigneeOptionWorker() {
    try {
        const response: ResponseGetUsersForAssigneeType = yield call(
            getUsersForAssigneeOptionApi
        );
        const users = response.data.map((item: any) => ({
            label: item.fullname,
            value: `${item.fullname} ${item._id}`,
            id: item._id,
            key: item._id
        }));

        if (response.status === 200) {
            destroyMessage();
            yield put(setUsers(users));
        }
    } catch (e) {
        destroyMessage();
        errorNotification(
            'Не удалось выполнить операцию...',
            e.response.data.message
        );
    }
}

function* createIncidentWorker({
    valuesCreateIncidentForm
}: CreateIncidentActionType) {
    try {
        const response: ResponseCreateIncidentType = yield call(
            postIncidentApi,
            valuesCreateIncidentForm
        );

        if (response.status === 201) {
            destroyMessage();
            successNotification('Операция выполнена.', response.data.message);
            yield put(getIncidents());
            yield put(resetCreateIncidentForm());
        }
    } catch (e) {
        destroyMessage();
        errorNotification(
            'Не удалось выполнить операцию...',
            e.response.data.message
        );
    }
}

function* deleteIncidentWorker({ incidentID }: DeleteIncidentActionType) {
    try {
        const response: ResponseDeleteIncident = yield call(
            deleteIncidentApi,
            incidentID
        );

        if (response.status === 201) {
            destroyMessage();
            successNotification('Операция выполнена.', response.data.message);
            yield put(getIncidents());
        }
    } catch (e) {
        destroyMessage();
        errorNotification(
            'Не удалось выполнить операцию...',
            e.response.data.message
        );
    }
}

function* updateIncidentWorker({ updateData }: UpdateIncidentActionType) {
    try {
        const response: ResponseUpdateIncident = yield call(
            updateIncidentApi,
            updateData
        );

        if (response.status === 201) {
            destroyMessage();
            successNotification('Операция выполнена.', response.data.message);
            yield put(getIncidents());
            yield put(resetCreateIncidentForm());
        }
    } catch (e) {
        destroyMessage();
        errorNotification(
            'Не удалось выполнить операцию...',
            e.response.data.message
        );
    }
}

function* incidentsWatcher() {
    yield takeEvery(GET_INCIDENTS, getInicdentsWorker);
    yield takeEvery(GET_USERS, getUsersForAssigneeOptionWorker);
    yield takeEvery(CREATE_INCIDENT, createIncidentWorker);
    yield takeEvery(DELETE_INCIDENT, deleteIncidentWorker);
    yield takeEvery(UPDATE_INCIDENT, updateIncidentWorker);
}

export default incidentsWatcher;
