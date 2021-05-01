import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import CreateIncidentForm from 'components/Main/Forms/CreateIncident/CreateIncidentForm';
import {
    changeAssigneeUserId,
    createIncident,
    updateIncident,
    updateValuesCreateIncidentForm
} from 'redux/actions/incidents/incidentsCreator';
import { RootReducer } from 'redux/reducers/rootReducer';
import { openMessage } from 'common/serverResponseHandlers/message';
import { IncidentsType } from 'redux/actions/incidents/interfaces';
import {
    CreateIncident,
    ValuesCreateIncidentsForm
} from 'common/types/incidents';

const CreateIncidentFormContainer = () => {
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
        <CreateIncidentForm
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

export default CreateIncidentFormContainer;
