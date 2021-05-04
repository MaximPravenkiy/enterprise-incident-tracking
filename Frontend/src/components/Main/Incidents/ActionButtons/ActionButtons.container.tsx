import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import ActionButtons from 'components/Main/Incidents/ActionButtons/ActionButtons';
import {
    changeAssigneeUserId,
    deleteIncident,
    getUsers,
    setDataForUpdating,
    updateValuesCreateIncidentForm
} from 'redux/actions/incidents/incidentsCreator';
import { openMessage } from 'common/serverResponseHandlers/message';
import { getDate } from 'common/helpers';
import { IncidentsType } from 'redux/actions/incidents/interfaces';
import { ListOfIncidents } from 'common/types/incidents';

const ActionButtonsContainer: FC<{ incident: ListOfIncidents }> = ({
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

export default ActionButtonsContainer;
