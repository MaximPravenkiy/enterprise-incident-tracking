import React from 'react';
import { put, call, takeEvery, SagaReturnType } from 'redux-saga/effects';
import PriorityIcon from 'components/priority-icon.component';
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
    updateLoader,
    closeModal
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
import { onLogout } from 'redux/actions/user-info/user-info.actions';
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

const ISO_DATE_FORMAT = 'YYYY-MM-DD';

function* getIncidentsWorker() {
    try {
        yield put(updateLoader(true));
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
                    startDate: getDate(startDate).format(ISO_DATE_FORMAT),
                    dueDate: getDate(dueDate).format(ISO_DATE_FORMAT)
                };
            });

            yield put(setIncidents(listOfIncidents));
            yield put(updateLoader(false));
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
            yield put(setUsers(users));
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
            yield put(closeModal());
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
    payload: { incidentFormData, editedIncidentId }
}: UpdateIncidentAction) {
    try {
        openLoadingMessage('Проверяем данные...');

        const response: ResponseUpdateIncident = yield call(
            updateIncidentApi,
            incidentFormData,
            editedIncidentId
        );

        if (response.status === 201) {
            destroyLoadingMessage();
            successNotification('Операция выполнена.', response.data.message);
            yield put(getIncidents());
            yield put(closeModal());
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
