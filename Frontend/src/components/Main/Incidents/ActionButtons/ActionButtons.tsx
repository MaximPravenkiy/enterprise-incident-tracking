import React from 'react';
import {Button, Space} from "antd";
import {useDispatch} from "react-redux";
import {
    changeAssigneeUserId,
    deleteIncident,
    getIncidents,
    getUsers, setDataForUpdating,
    updateValuesCreateIncidentForm
} from "../../../../redux/store/actions/incidentsCreator";
import {getDate, ListOfIncidentsTypes} from "../../../../redux/store/reducers/incidentsReducer";
import {openMessage} from "../../../../containers/ServerResponseHandlers/Message";
import {Dispatch} from "redux";
import {IncidentsType} from "../../../../redux/store/actions/Types/incidentsTypes";

type ActionButtonsTypeProps = {
    incident: ListOfIncidentsTypes
}

const ActionButtons: React.FC<ActionButtonsTypeProps> = ({incident}) => {
    const dispatch = useDispatch<Dispatch<IncidentsType>>();

    const onDeleteIncident = (event: React.MouseEvent) => {
        console.log(event.nativeEvent.target)
        const incidentID = 'event.target.closest("button").dataset.key';

        openMessage('Выполняем запрос...');
        dispatch(deleteIncident(incidentID));
        dispatch(getIncidents());
    }

    const onEditIncident = (event: any) => {
        console.log(event.target.matches)
        const currentIncident = JSON.parse(event.target.closest("button").dataset.incident);
        const userData = localStorage.getItem('userData');
        const incidentID = currentIncident.key;

        if (!userData) return;

        const assignOnCurrentUser = JSON.parse(userData).userId;

        openMessage('Загружаем данные...');
        dispatch(setDataForUpdating(incidentID))
        dispatch(changeAssigneeUserId(assignOnCurrentUser));
        dispatch(updateValuesCreateIncidentForm({
            ...currentIncident,
            startDate: getDate(currentIncident.startDate),
            dueDate: getDate(currentIncident.dueDate),
        }));
        dispatch(getUsers());
    }

    return (
        <Space size="middle">
            <Button
                type="link"
                onClick={onEditIncident}
                data-incident={JSON.stringify(incident)}
            >
                Edit
            </Button>
            <Button
                type="link"
                onClick={onDeleteIncident}
                data-key={incident.key}
            >
                Delete
            </Button>
        </Space>
    );
}

export default ActionButtons;