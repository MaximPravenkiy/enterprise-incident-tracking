import React from "react";
import PriorityIcon from "../../containers/PriorityIcon";

import {put, call, takeEvery} from 'redux-saga/effects';
import {deleteIncidentApi, getIncidentsApi, getUsersForAssigneeOptionApi, postIncidentApi} from "./API";
import {setIncidents, setUsers} from "../store/actions/incidentsCreator";
import {CREATE_INCIDENT, DELETE_INCIDENT, GET_INCIDENTS, GET_USERS} from "../store/actions/actionTypes";
import {logout} from "../store/actions/loginCreator";

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
        console.log(e.response.data.message);
        yield put(logout());
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

        yield put(setUsers(users));
    } catch (e) {
        console.log(e.response.data.message);
    }
}

function* createIncidentWorker({values}: any): any {
    try {
        const response = yield call(postIncidentApi, values);
        console.log(response.data.message);
        // yield put(setIncidents());
    } catch (e) {
        console.log(e.response.data.message);
    }
}

function* deleteIncidentWorker({incidentID}: any): any {
    try {
        const response = yield call(deleteIncidentApi, incidentID);
        console.log(response.data.message);
    } catch (e) {
        console.log(e.response.data.message);
    }
}

function* incidentsWatcher() {
    yield takeEvery(GET_INCIDENTS, getInicdentsWorker);
    yield takeEvery(GET_USERS, getUsersForAssigneeOptionWorker);
    yield takeEvery(CREATE_INCIDENT, createIncidentWorker);
    yield takeEvery(DELETE_INCIDENT, deleteIncidentWorker);
}

export default incidentsWatcher;