import {
    CreateIncident,
    Incident,
    User,
    ValuesCreateIncidentsForm
} from 'common/types/incidents';
import {
    UPDATE_INCIDENT,
    DELETE_INCIDENT,
    CREATE_INCIDENT,
    GET_USERS,
    GET_INCIDENTS,
    UPDATE_LOADER,
    SET_DATA_FOR_UPDATING,
    RESET_CREATE_INCIDENT_FORM,
    UPDATE_VALUES_CREATE_INCIDENT_FORM,
    CLOSE_MODAL,
    SET_USERS,
    SET_INCIDENTS,
    SHOW_OWN_INCIDENTS,
    SHOW_ALL_INCIDENTS
} from './incidents.actions';

interface SetIncidentsAction {
    type: typeof SET_INCIDENTS;
    payload: {
        listOfIncidents: Incident[];
    };
}

interface CreateIncidentAction {
    type: typeof CREATE_INCIDENT;
    payload: {
        valuesCreateIncidentForm: ValuesCreateIncidentsForm;
    };
}

interface DeleteIncidentAction {
    type: typeof DELETE_INCIDENT;
    payload: { incidentID: string };
}

interface CloseModalAction {
    type: typeof CLOSE_MODAL;
}

interface UpdateValuesCreateIncidentFormAction {
    type: typeof UPDATE_VALUES_CREATE_INCIDENT_FORM;
    payload: { updatedValue: ValuesCreateIncidentsForm };
}

interface SetDataForUpdatingAction {
    type: typeof SET_DATA_FOR_UPDATING;
    payload: { incidentID: string };
}

interface UpdateIncidentAction {
    type: typeof UPDATE_INCIDENT;
    payload: {
        updateData: {
            incidentID: string;
            incidentFormData: CreateIncident;
        };
    };
}

interface ResetCreateIncidentFormAction {
    type: typeof RESET_CREATE_INCIDENT_FORM;
}

interface GetUsersAction {
    type: typeof GET_USERS;
}

interface SetUsersAction {
    type: typeof SET_USERS;
    payload: { users: User[] };
}

interface GetIncidentsAction {
    type: typeof GET_INCIDENTS;
}

interface UpdateLoaderAction {
    type: typeof UPDATE_LOADER;
    payload: { isListOfIncidentsLoading: boolean };
}

interface ShowOwnIncidentsAction {
    type: typeof SHOW_OWN_INCIDENTS;
}

interface ShowAllIncidentsAction {
    type: typeof SHOW_ALL_INCIDENTS;
}

type IncidentsActions =
    | SetIncidentsAction
    | CreateIncidentAction
    | DeleteIncidentAction
    | CloseModalAction
    | UpdateValuesCreateIncidentFormAction
    | SetDataForUpdatingAction
    | UpdateIncidentAction
    | ResetCreateIncidentFormAction
    | GetUsersAction
    | SetUsersAction
    | GetIncidentsAction
    | UpdateLoaderAction
    | ShowOwnIncidentsAction
    | ShowAllIncidentsAction;

export type {
    IncidentsActions,
    SetIncidentsAction,
    CreateIncidentAction,
    DeleteIncidentAction,
    CloseModalAction,
    UpdateValuesCreateIncidentFormAction,
    SetDataForUpdatingAction,
    UpdateIncidentAction,
    ResetCreateIncidentFormAction,
    GetUsersAction,
    SetUsersAction,
    GetIncidentsAction,
    UpdateLoaderAction,
    ShowOwnIncidentsAction,
    ShowAllIncidentsAction
};
