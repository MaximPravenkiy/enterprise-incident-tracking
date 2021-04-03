import React from 'react';
import { put, call, takeEvery, SagaReturnType } from 'redux-saga/effects';
import PriorityIcon from '../../containers/PriorityIcon';

import {
    deleteIncidentApi,
    getIncidentsApi,
    getUsersForAssigneeOptionApi,
    postIncidentApi,
    updateIncidentApi
} from './API';
import { setIncidents, setUsers } from '../store/actions/incidentsCreator';
import {
    CREATE_INCIDENT,
    DELETE_INCIDENT,
    GET_INCIDENTS,
    GET_USERS,
    UPDATE_INCIDENT
} from '../store/actions/actionTypes';
import { logout } from '../store/actions/loginCreator';
import {
    errorNotification,
    successNotification
} from '../../containers/ServerResponseHandlers/Notification';
import { destroyMessage } from '../../containers/ServerResponseHandlers/Message';
import {
    CreateIncidentActionType,
    DeleteIncidentActionType,
    GetIncidentsActionType,
    UpdateIncidentActionType
} from '../store/reducers/incidentsReducer';

type ResponseGetIncidentsType = SagaReturnType<typeof getIncidentsApi>;
type ResponseGetUsersForAssigneeType = SagaReturnType<
    typeof getUsersForAssigneeOptionApi
>;
type ResponseCreateIncidentType = SagaReturnType<typeof postIncidentApi>;
type ResponseDeleteIncident = SagaReturnType<typeof deleteIncidentApi>;
type ResponseUpdateIncident = SagaReturnType<typeof updateIncidentApi>;

function* getInicdentsWorker(...arg: [GetIncidentsActionType]) {
    try {
        console.log(arg);
        console.log('SAGA');
        const userData = localStorage.getItem('userData');

        if (!userData) return;

        const { token } = JSON.parse(userData);
        const response: ResponseGetIncidentsType = yield call(
            getIncidentsApi,
            token
        );
        const listOfIncidents = response.data.map((incident: any) => ({
            key: incident._id,
            icon: <PriorityIcon priority={incident.priority} />,
            incidentName: incident.incidentName,
            description: incident.description,
            assignee: incident.assignee,
            area: incident.area,
            startDate: incident.startDate.split('T')[0],
            dueDate: incident.dueDate.split('T')[0],
            priority: incident.priority,
            status: incident.status
        }));
        console.log(listOfIncidents);
        yield put(setIncidents(listOfIncidents));
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

        destroyMessage();
        yield put(setUsers(users));
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
        destroyMessage();
        successNotification('Операция выполнена.', response.data.message);
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
        destroyMessage();
        successNotification('Операция выполнена.', response.data.message);
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
        destroyMessage();
        successNotification('Операция выполнена.', response.data.message);
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
