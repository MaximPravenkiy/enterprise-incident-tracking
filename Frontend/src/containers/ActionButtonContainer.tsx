import React from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import ActionButtons from '../components/Main/Incidents/ActionButtons/ActionButtons';
import { openMessage } from './ServerResponseHandlers/Message';
import {
    changeAssigneeUserId,
    deleteIncident,
    getUsers,
    setDataForUpdating,
    updateValuesCreateIncidentForm
} from '../redux/store/actions/incidentsCreator';
import {
    getDate,
    IncidentsType,
    ListOfIncidentsTypes
} from '../redux/store/reducers/incidentsReducer';

export type ActionButtonsContainerTypeProps = {
    incident: ListOfIncidentsTypes;
};

const ActionButtonContainer: React.FC<ActionButtonsContainerTypeProps> = ({
    incident
}) => {
    const dispatch = useDispatch<Dispatch<IncidentsType>>();

    const onDeleteIncident = () => {
        const incidentID = incident.key;

        openMessage('Выполняем запрос...');
        dispatch(deleteIncident(incidentID));
    };

    const onEditIncident = () => {
        const incidentID = incident.key;
        // const userData = localStorage.getItem('userData');
        //
        // if (!userData) return;
        //
        // const assignOnCurrentUser = JSON.parse(userData).userId;
        // console.log(assignOnCurrentUser);
        openMessage('Загружаем данные...');
        dispatch(setDataForUpdating(incidentID));
        dispatch(changeAssigneeUserId(incident.owner));
        dispatch(
            updateValuesCreateIncidentForm({
                ...incident,
                startDate: getDate(incident.startDate),
                dueDate: getDate(incident.dueDate)
            })
        );
        dispatch(getUsers());
    };

    return (
        <ActionButtons
            onEditIncident={onEditIncident}
            onDeleteIncident={onDeleteIncident}
        />
    );
};

export default ActionButtonContainer;
