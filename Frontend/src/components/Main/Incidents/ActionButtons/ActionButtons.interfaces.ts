import { Incident, ValuesCreateIncidentsForm } from 'common/types/incidents';
import {
    DeleteIncidentAction,
    GetUsersAction,
    SetDataForUpdatingAction,
    UpdateValuesCreateIncidentFormAction
} from 'redux/actions/incidents/incidents.interfaces';

interface ActionButtonsProps {
    onEditIncident: () => void;
    onDeleteIncident: () => void;
}

interface ActionButtonsContainerProps {
    incident: Incident;
    dispatchGetUsers: () => GetUsersAction;
    dispatchUpdateValuesCreateIncidentForm: (payload: {
        updatedValue: ValuesCreateIncidentsForm;
    }) => UpdateValuesCreateIncidentFormAction;
    dispatchSetDataForUpdating: (payload: {
        incidentID: string;
    }) => SetDataForUpdatingAction;
    dispatchDeleteIncident: (payload: {
        incidentID: string;
    }) => DeleteIncidentAction;
}

export type { ActionButtonsProps, ActionButtonsContainerProps };
