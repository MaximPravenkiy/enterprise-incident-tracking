import React from 'react';
import CreateIncidents from "../components/Main/CreateIncidents/CreateIncidents";
import PriorityLabel from "../components/Main/CreateIncidents/PriorityLabel/PriorityLabel";
import {useDispatch, useSelector} from "react-redux";
import {
    changeAssigneeUserId,
    createIncident,
    getIncidents, resetCreateIncidentForm, updateIncident,
    updateValuesCreateIncidentForm
} from "../redux/store/actions/incidentsCreator";
import {openMessage} from "./ServerResponseHandlers/Message";
import {RootReducer} from "../redux/store/reducers/rootReducer";
import {Dispatch} from "redux";
import {IncidentsType} from "../redux/store/actions/Types/incidentsTypes";
import {
    actionWithCreateIncidentFormType, CreateIncidentTypes, UsersTypes,
    ValuesCreateIncidentFormTypes
} from "../redux/store/reducers/incidentsReducer";

export type CreateIncidentTypeProps = {
    areas: AreaType
    priority: PriorityType
    status: StatusType
    users: Array<UsersTypes>
    isModalVisible: boolean
    valuesCreateIncidentForm: ValuesCreateIncidentFormTypes
    actionWithCreateIncidentForm: actionWithCreateIncidentFormType
    getUserId: (value: string) => void
    onFinish: (value: CreateIncidentTypes) => void
    onChange: (value: ValuesCreateIncidentFormTypes) => void
}

type AreaType = typeof areas;
type PriorityType = typeof priority;
type StatusType = typeof status;

// For selections
const areas = [
    {label: 'Layout', value: 'Layout'},
    {label: 'Frontend', value: 'Frontend'},
    {label: 'Backend', value: 'Backend'},
    {label: 'System administration', value: 'System administration'},
    {label: 'Testing', value: 'Testing'},
];

const priority = [
    {label: <PriorityLabel color='red' text='Blocker'/>, value: 'Blocker'},
    {label: <PriorityLabel color='orange' text='Critical'/>, value: 'Critical'},
    {label: <PriorityLabel color='yellow' text='Major'/>, value: 'Major'},
    {label: <PriorityLabel color='green' text='Normal'/>, value: 'Normal'},
    {label: <PriorityLabel color='grey' text='Minor'/>, value: 'Minor'},
];

const status = [
    {label: 'Зарегистрирован', value: 'Зарегистрирован'},
    {label: 'Открыт', value: 'Открыт'},
    {label: 'В работе', value: 'В работе'},
    {label: 'Необходима доп. информация', value: 'Необходима доп. информация'},
    {label: 'Информация предоставлена', value: 'Информация предоставлена'},
    {label: 'Исправлено', value: 'Исправлено'},
    {label: 'Проверено', value: 'Проверено'},
    {label: 'Закрыто', value: 'Закрыто'},
    {label: 'Брак', value: 'Брак'},
    {label: 'Переоткрыто', value: 'Переоткрыто'},
];


const CreateIncidentsContainer = () => {
    const {
        users,
        assigneeUserId,
        isModalVisible,
        valuesCreateIncidentForm,
        actionWithCreateIncidentForm,
        incidentID
    } = useSelector(({incidentsReducer}: RootReducer) => incidentsReducer);
    const dispatch = useDispatch<Dispatch<IncidentsType>>();

    // Получить  user id
    const getUserId = (value: string) => {
        const helperArray = value.split(' ');
        const extractID = helperArray[helperArray.length - 1];
        dispatch(changeAssigneeUserId(extractID));
    };

    // Диспатч изменения контролов формы
    function onChange(value: ValuesCreateIncidentFormTypes) {
        dispatch(updateValuesCreateIncidentForm(value))
    }

    // Создать или обновить инцидент
    const onFinish = (values: CreateIncidentTypes) => {
        values.owner = assigneeUserId;
        values.assignee = values.assignee.split(assigneeUserId)[0];
        openMessage('Проверяем данные...');

        if (actionWithCreateIncidentForm === 'Создать') {
            dispatch(createIncident(values));
        }

        if (actionWithCreateIncidentForm === 'Обновить') {
            dispatch(updateIncident({values, incidentID}));
        }

        dispatch(getIncidents());
        dispatch(resetCreateIncidentForm());
    };

    return (
        <CreateIncidents
            areas={areas}
            priority={priority}
            status={status}
            users={users}
            isModalVisible={isModalVisible}
            getUserId={getUserId}
            onFinish={onFinish}
            valuesCreateIncidentForm={valuesCreateIncidentForm}
            onChange={onChange}
            actionWithCreateIncidentForm={actionWithCreateIncidentForm}
        />
    );
}

export default CreateIncidentsContainer;