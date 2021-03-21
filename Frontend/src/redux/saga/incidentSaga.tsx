import React from "react";
import PriorityIcon from "../../containers/PriorityIcon";

import {put, call, takeEvery} from 'redux-saga/effects';
import {getIncidentsApi, getUsersForAssigneeOptionApi, postIncidentApi} from "./API";
import {setIncidents, setUsers} from "../store/actions/incidentsCreator";
import {CREATE_INCIDENT, GET_INCIDENTS, GET_USERS} from "../store/actions/actionTypes";

function* getInicdentsWorker(): any {
    try {
        const userData = localStorage.getItem('userData');

        if (!userData) return;

        const token = JSON.parse(userData).token;
        const response  = yield call(getIncidentsApi, token);
        const listOfIncidents = response.data.map((incident: any) => ({
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
    } catch (e) {
        console.log(e.response.data.message);
    }
}

function* incidentsWatcher() {
    yield takeEvery(GET_INCIDENTS, getInicdentsWorker);
    yield takeEvery(GET_USERS, getUsersForAssigneeOptionWorker);
    yield takeEvery(CREATE_INCIDENT, createIncidentWorker);
}

export default incidentsWatcher;