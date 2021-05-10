import React from 'react';
import { put, call, takeEvery, SagaReturnType } from 'redux-saga/effects';
import PriorityIcon from 'components/PriorityIcon';
import {
    CREATE_INCIDENT,
    DELETE_INCIDENT,
    GET_INCIDENTS,
    GET_USERS,
    UPDATE_INCIDENT,
    getIncidents,
    resetCreateIncidentForm,
    setIncidents,
    setUsers,
    updateLoader
} from 'redux/actions/incidents/incidents.actions';
import {
    destroyLoadingMessage,
    errorNotification,
    openLoadingMessage,
    successNotification
} from 'common/services/notification.services';
import {
    CreateIncidentAction,
    DeleteIncidentAction,
    UpdateIncidentAction
} from 'redux/actions/incidents/incidents.interfaces';
import { getDate } from 'common/helpers';
import { onLogout } from 'redux/actions/userInfo/userInfo.actions';
import {
    deleteIncidentApi,
    getAllIncidentsApi,
    getMyIncidentsApi,
    getUsersForAssigneeOptionApi,
    postIncidentApi,
    updateIncidentApi
} from './api/api';

type ResponseGetIncidentsType = SagaReturnType<typeof getMyIncidentsApi>;
type ResponseGetUsersForAssigneeType = SagaReturnType<
    typeof getUsersForAssigneeOptionApi
>;
type ResponseCreateIncidentType = SagaReturnType<typeof postIncidentApi>;
type ResponseDeleteIncident = SagaReturnType<typeof deleteIncidentApi>;
type ResponseUpdateIncident = SagaReturnType<typeof updateIncidentApi>;

function* getIncidentsWorker() {
    try {
        yield put(updateLoader({ isListOfIncidentsLoading: true }));
        const isOwnIncidents = JSON.parse(
            localStorage.getItem('isOwnIncidents') as string
        );
        let response: ResponseGetIncidentsType;

        if (isOwnIncidents) {
            response = yield call(getMyIncidentsApi);
        } else {
            response = yield call(getAllIncidentsApi);
        }

        if (response.status === 200) {
            const listOfIncidents = response.data.map((incident) => {
                const { _id: id, priority, startDate, dueDate } = incident;
                return {
                    ...incident,
                    key: id,
                    icon: <PriorityIcon priority={priority} />,
                    startDate: getDate(startDate).format('YYYY-MM-DD'),
                    dueDate: getDate(dueDate).format('YYYY-MM-DD')
                };
            });

            yield put(setIncidents({ listOfIncidents }));
            yield put(updateLoader({ isListOfIncidentsLoading: false }));
        }
    } catch (e) {
        errorNotification(
            'Не удалось выполнить операцию...',
            e.response.data.message
        );

        if (e.response.status === 401) {
            yield put(onLogout());
        }
    }
}

function* getUsersForAssigneeOptionWorker() {
    try {
        openLoadingMessage('Загружаем данные...');

        const response: ResponseGetUsersForAssigneeType = yield call(
            getUsersForAssigneeOptionApi
        );

        if (response.status === 200) {
            const users = response.data.map((item) => {
                const { _id: id, fullname } = item;
                return {
                    label: fullname,
                    value: id,
                    id,
                    key: id
                };
            });

            destroyLoadingMessage();
            yield put(setUsers({ users }));
        }
    } catch (e) {
        destroyLoadingMessage();
        errorNotification(
            'Не удалось выполнить операцию...',
            e.response.data.message
        );
    }
}

function* createIncidentWorker({
    payload: { valuesCreateIncidentForm }
}: CreateIncidentAction) {
    try {
        openLoadingMessage('Проверяем данные...');

        const response: ResponseCreateIncidentType = yield call(
            postIncidentApi,
            valuesCreateIncidentForm
        );

        if (response.status === 201) {
            destroyLoadingMessage();
            successNotification('Операция выполнена.', response.data.message);
            yield put(getIncidents());
            yield put(resetCreateIncidentForm());
        }
    } catch (e) {
        destroyLoadingMessage();
        errorNotification(
            'Не удалось выполнить операцию...',
            e.response.data.message
        );
    }
}

function* deleteIncidentWorker({
    payload: { incidentID }
}: DeleteIncidentAction) {
    try {
        openLoadingMessage('Выполняем запрос...');

        const response: ResponseDeleteIncident = yield call(
            deleteIncidentApi,
            incidentID
        );

        if (response.status === 201) {
            destroyLoadingMessage();
            successNotification('Операция выполнена.', response.data.message);
            yield put(getIncidents());
        }
    } catch (e) {
        destroyLoadingMessage();
        errorNotification(
            'Не удалось выполнить операцию...',
            e.response.data.message
        );
    }
}

function* updateIncidentWorker({
    payload: { updateData }
}: UpdateIncidentAction) {
    try {
        openLoadingMessage('Проверяем данные...');

        const response: ResponseUpdateIncident = yield call(
            updateIncidentApi,
            updateData
        );

        if (response.status === 201) {
            destroyLoadingMessage();
            successNotification('Операция выполнена.', response.data.message);
            yield put(getIncidents());
            yield put(resetCreateIncidentForm());
        }
    } catch (e) {
        destroyLoadingMessage();
        errorNotification(
            'Не удалось выполнить операцию...',
            e.response.data.message
        );
    }
}

function* incidentsWatcher() {
    yield takeEvery(GET_INCIDENTS, getIncidentsWorker);
    yield takeEvery(GET_USERS, getUsersForAssigneeOptionWorker);
    yield takeEvery(CREATE_INCIDENT, createIncidentWorker);
    yield takeEvery(DELETE_INCIDENT, deleteIncidentWorker);
    yield takeEvery(UPDATE_INCIDENT, updateIncidentWorker);
}

export default incidentsWatcher;
