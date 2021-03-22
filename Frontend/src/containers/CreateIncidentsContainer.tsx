import React from 'react';
import CreateIncidents from "../components/Main/CreateIncidents/CreateIncidents";
import PriorityLabel from "../components/Main/CreateIncidents/PriorityLabel/PriorityLabel";
import {useDispatch, useSelector} from "react-redux";
import {changeAssigneeUserId, createIncident, getIncidents} from "../redux/store/actions/incidentsCreator";

export interface CreateIncidentProps {
    areas: any,
    priority: any,
    status: any,
    users: any,
    isModalVisible: any,
    getUserId: any,
    onFinish: any
}

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
    // const onReset = () => {
        // formRef.current!.resetFields();
    // };

    const {users, assigneeUserId, isModalVisible} = useSelector(({incidentsReducer}: any) => incidentsReducer);
    const dispatch = useDispatch();

    // Получить  user id
    const getUserId = (...args: any[]) => {
        dispatch(changeAssigneeUserId(args[1].id));
    };

    // Создать incident
    const onFinish = (values: any) => {
        values.owner = assigneeUserId;
        dispatch(createIncident(values));
        dispatch(getIncidents());
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
        />
    );
}

export default CreateIncidentsContainer;