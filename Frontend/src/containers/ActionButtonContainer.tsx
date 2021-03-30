import React from 'react';
import ActionButtons from "../components/Main/Incidents/ActionButtons/ActionButtons";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {IncidentsType} from "../redux/store/actions/Types/incidentsTypes";
import {openMessage} from "./ServerResponseHandlers/Message";
import {
    changeAssigneeUserId,
    deleteIncident,
    getIncidents, getUsers,
    setDataForUpdating, updateValuesCreateIncidentForm
} from "../redux/store/actions/incidentsCreator";
import {getDate, ListOfIncidentsTypes} from "../redux/store/reducers/incidentsReducer";

export type ActionButtonsContainerTypeProps = {
    incident: ListOfIncidentsTypes
}

const ActionButtonContainer: React.FC<ActionButtonsContainerTypeProps> = ({incident}) => {
    const dispatch = useDispatch<Dispatch<IncidentsType>>();

    const onDeleteIncident = () => {
        const incidentID = incident.key;

        openMessage('Выполняем запрос...');
        dispatch(deleteIncident(incidentID));
        dispatch(getIncidents());
    }

    const onEditIncident = () => {
        const userData = localStorage.getItem('userData');
        const incidentID = incident.key;

        if (!userData) return;

        const assignOnCurrentUser = JSON.parse(userData).userId;

        openMessage('Загружаем данные...');
        dispatch(setDataForUpdating(incidentID))
        dispatch(changeAssigneeUserId(assignOnCurrentUser));
        dispatch(updateValuesCreateIncidentForm({
            ...incident,
            startDate: getDate(incident.startDate),
            dueDate: getDate(incident.dueDate),
        }));
        dispatch(getUsers());
    }

    return (
        <ActionButtons
            onEditIncident={onEditIncident}
            onDeleteIncident={onDeleteIncident}
        />
    );
}

export default ActionButtonContainer;