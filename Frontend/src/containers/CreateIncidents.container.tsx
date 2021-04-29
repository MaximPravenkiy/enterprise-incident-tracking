import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import CreateIncidentsForm from 'components/Main/Forms/CreateIncidents/CreateIncidentsForm';
import {
    changeAssigneeUserId,
    createIncident,
    updateIncident,
    updateValuesCreateIncidentForm
} from 'redux/store/actions/incidents/incidentsCreator';
import { RootReducer } from 'redux/store/reducers/rootReducer';
import { openMessage } from 'common/serverResponseHandlers/message';
import { IncidentsType } from 'redux/store/actions/incidents/interfaces';
import {
    CreateIncident,
    ValuesCreateIncidentsForm
} from 'common/interfaces/incidents';

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
    const onChange = (value: ValuesCreateIncidentsForm) => {
        dispatch(updateValuesCreateIncidentForm(value));
    };

    // Создать или обновить инцидент
    const onFinish = (values: CreateIncident) => {
        const incidentFormData = {
            ...values,
            assignee: values.assignee
                ? values.assignee.split(assigneeUserId)[0].trim()
                : '',
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
        <CreateIncidentsForm
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
