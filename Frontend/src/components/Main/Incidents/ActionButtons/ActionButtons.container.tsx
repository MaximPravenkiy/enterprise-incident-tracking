import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import {
    deleteIncident,
    getUsers,
    setDataForUpdating,
    updateValuesCreateIncidentForm
} from 'redux/actions/incidents/incidents.actions';
import { getDate } from 'common/helpers';
import { IncidentsActions } from 'redux/actions/incidents/incidents.interfaces';
import { Incident } from 'common/types/incidents';
import ActionButtons from './ActionButtons';

const ActionButtonsContainer: FC<{ incident: Incident }> = ({ incident }) => {
    const dispatch = useDispatch<Dispatch<IncidentsActions>>();

    const onDeleteIncident = () => {
        const incidentID = incident.key;

        dispatch(deleteIncident({ incidentID }));
    };

    const onEditIncident = () => {
        const incidentID = incident.key;

        dispatch(setDataForUpdating({ incidentID }));
        dispatch(
            updateValuesCreateIncidentForm({
                updatedValue: {
                    ...incident,
                    startDate: getDate(incident.startDate),
                    dueDate: getDate(incident.dueDate)
                }
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
