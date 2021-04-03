import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import CreateIncidents from '../components/Main/CreateIncidents/CreateIncidents';
import {
    changeAssigneeUserId,
    createIncident,
    getIncidents,
    resetCreateIncidentForm,
    updateIncident,
    updateValuesCreateIncidentForm
} from '../redux/store/actions/incidentsCreator';
import { openMessage } from './ServerResponseHandlers/Message';
import { RootReducer } from '../redux/store/reducers/rootReducer';
import {
    CreateIncidentTypes,
    IncidentsType,
    ValuesCreateIncidentFormTypes
} from '../redux/store/reducers/incidentsReducer';

const CreateIncidentsContainer = () => {
    const {
        users,
        assigneeUserId,
        isModalVisible,
        valuesCreateIncidentForm,
        actionWithCreateIncidentForm,
        incidentID
    } = useSelector(({ incidentsReducer }: RootReducer) => incidentsReducer);
    const dispatch = useDispatch<Dispatch<IncidentsType>>();

    // Получить user id
    const getUserId = (value: string) => {
        const helperArray = value.split(' ');
        const extractID = helperArray[helperArray.length - 1];
        dispatch(changeAssigneeUserId(extractID));
    };

    // Диспатч изменения контролов формы
    function onChange(value: ValuesCreateIncidentFormTypes) {
        dispatch(updateValuesCreateIncidentForm(value));
    }

    // Создать или обновить инцидент
    const onFinish = (values: CreateIncidentTypes) => {
        console.log(values.assignee.split(assigneeUserId)[0].trim());
        const incidentFormData = {
            ...values,
            assignee: values.assignee.split(assigneeUserId)[0].trim(),
            owner: assigneeUserId
        };
        openMessage('Проверяем данные...');

        if (actionWithCreateIncidentForm === 'Создать') {
            dispatch(createIncident(incidentFormData));
        }

        if (actionWithCreateIncidentForm === 'Обновить') {
            dispatch(updateIncident({ incidentFormData, incidentID }));
        }

        dispatch(getIncidents());
        dispatch(resetCreateIncidentForm());
    };

    return (
        <CreateIncidents
            users={users}
            isModalVisible={isModalVisible}
            getUserId={getUserId}
            onFinish={onFinish}
            valuesCreateIncidentForm={valuesCreateIncidentForm}
            onChange={onChange}
            actionWithCreateIncidentForm={actionWithCreateIncidentForm}
        />
    );
};

export default CreateIncidentsContainer;
