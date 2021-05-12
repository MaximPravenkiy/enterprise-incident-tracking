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
    dispatchSetDataForUpdating: (
        editedIncidentId: string
    ) => SetDataForUpdatingAction;
    dispatchDeleteIncident: (incidentID: string) => DeleteIncidentAction;
    dispatchShowEditIncident: () => ShowEditIncidentAction;
}

export type { ActionButtonsProps, ActionButtonsContainerProps };
