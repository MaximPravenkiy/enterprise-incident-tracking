import {put, call, takeEvery} from 'redux-saga/effects';
import {getIncidentsApi} from "./API";
import PriorityIcon from "../../containers/PriorityIcon";
import {setIncidents} from "../store/actions/incidentsCreator";
import React from "react";
import {GET_INCIDENTS} from "../store/actions/actionTypes";

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
        console.log(listOfIncidents)

        yield put(setIncidents(listOfIncidents));
    } catch (e) {
        console.log(e.response.data.message);
    }
}

function* incidentsWatcher() {
    yield takeEvery(GET_INCIDENTS, getInicdentsWorker);
}

export default incidentsWatcher;