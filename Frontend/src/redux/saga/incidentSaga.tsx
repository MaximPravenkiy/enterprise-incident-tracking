import React from "react";
import PriorityIcon from "../../containers/PriorityIcon";

import {put, call, takeEvery} from 'redux-saga/effects';
import {
    deleteIncidentApi,
    getIncidentsApi,
    getUsersForAssigneeOptionApi,
    postIncidentApi,
    updateIncidentApi
} from "./API";
import {setIncidents, setUsers} from "../store/actions/incidentsCreator";
import {
    CREATE_INCIDENT,
    DELETE_INCIDENT,
    GET_INCIDENTS,
    GET_USERS,
    UPDATE_INCIDENT
} from "../store/actions/actionTypes";
import {logout} from "../store/actions/loginCreator";
import {errorNotification, successNotification} from "../../containers/ServerResponseHandlers/Notification";
import {destroyMessage} from "../../containers/ServerResponseHandlers/Message";

function* getInicdentsWorker(): any {
    try {
        const userData = localStorage.getItem('userData');

        if (!userData) return;

        const token = JSON.parse(userData).token;
        const response  = yield call(getIncidentsApi, token);
        const listOfIncidents = response.data.map((incident: any) => ({
            key: incident._id,
            icon: <PriorityIcon priority={incident.priority}/>,
            incidentName: incident.incidentName,
            description: incident.description,
            assignee: incident.assignee,
            area: incident.area,
            startDate: incident.startDate.split('T')[0],
            dueDate: incident.dueDate.split('T')[0],
            priority: incident.priority,
            status: incident.status
        }));

        yield put(setIncidents(listOfIncidents));
    } catch (e) {
        errorNotification('Не удалось выполнить операцию...', e.response.data.message);
        localStorage.removeItem('userData');
        if (e.response.status === 401) {
            yield put(logout());
        }
    }
}

function* getUsersForAssigneeOptionWorker(): any {
    try {
        const response = yield call(getUsersForAssigneeOptionApi);
        const users = response.data.map((item: any) => ({
            label: item.fullname,
            value: item.fullname,
            id: item._id
        }));

        destroyMessage();
        yield put(setUsers(users));
    } catch (e) {
        destroyMessage();
        errorNotification('Не удалось выполнить операцию...', e.response.data.message);
    }
}

function* createIncidentWorker({values}: any): any {
    try {
        const response = yield call(postIncidentApi, values);
        destroyMessage();
        successNotification('Операция выполнена.', response.data.message)
    } catch (e) {
        destroyMessage();
        errorNotification('Не удалось выполнить операцию...', e.response.data.message);
    }
}

function* deleteIncidentWorker({incidentID}: any): any {
    try {
        const response = yield call(deleteIncidentApi, incidentID);
        destroyMessage();
        successNotification('Операция выполнена.', response.data.message)
    } catch (e) {
        destroyMessage();
        errorNotification('Не удалось выполнить операцию...', e.response.data.message);
    }
}

function* updateIncidentWorker({updateData}: any): any {
    try {
        const response = yield call(updateIncidentApi, updateData);
        destroyMessage();
        successNotification('Операция выполнена.', response.data.message)
    } catch (e) {
        destroyMessage();
        errorNotification('Не удалось выполнить операцию...', e.response.data.message);
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