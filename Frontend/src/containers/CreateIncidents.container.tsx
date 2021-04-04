import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import CreateIncidents from 'components/Main/CreateIncidents/CreateIncidents';
import {
    changeAssigneeUserId,
    createIncident,
    updateIncident,
    updateValuesCreateIncidentForm
} from 'redux/store/actions/incidentsCreator';
import { RootReducer } from 'redux/store/reducers/rootReducer';
import {
    CreateIncidentTypes,
    IncidentsType,
    ValuesCreateIncidentFormTypes
} from 'redux/store/reducers/incidentsReducer';
import { openMessage } from 'common/ServerResponseHandlers/Message';

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

    // Получить user id для поля Assignee
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
