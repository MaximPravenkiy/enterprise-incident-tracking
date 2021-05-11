import { Incident, ValuesCreateIncidentsForm } from 'common/types/incidents';
import {
    DeleteIncidentAction,
    GetUsersAction,
    SetDataForUpdatingAction,
    ShowEditIncidentAction,
    UpdateValuesCreateIncidentFormAction
} from 'redux/actions/incidents/incidents.interfaces';

interface ActionButtonsProps {
    onEditIncident: () => void;
    onDeleteIncident: () => void;
}

interface ActionButtonsContainerProps {
    incident: Incident;
    dispatchGetUsers: () => GetUsersAction;
    dispatchSetDataForUpdating: (payload: {
        editedIncidentId: string;
    }) => SetDataForUpdatingAction;
    dispatchDeleteIncident: (payload: {
        incidentID: string;
    }) => DeleteIncidentAction;
    dispatchShowEditIncident: () => ShowEditIncidentAction;
}

export type { ActionButtonsProps, ActionButtonsContainerProps };
