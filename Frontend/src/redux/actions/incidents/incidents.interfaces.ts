import {
    ActionWithIncidents,
    CreateIncident,
    ListOfIncidents,
    Users,
    ValuesCreateIncidentsForm
} from 'common/types/incidents';
import {
    UPDATE_INCIDENT,
    DELETE_INCIDENT,
    CREATE_INCIDENT,
    GET_USERS,
    GET_INCIDENTS,
    CHANGE_ACTION_WITH_LIST_OF_INCIDENTS,
    UPDATE_LOADER,
    SET_DATA_FOR_UPDATING,
    RESET_CREATE_INCIDENT_FORM,
    UPDATE_VALUES_CREATE_INCIDENT_FORM,
    CHANGE_ASSIGNEE_USER_ID,
    CLOSE_MODAL,
    SET_USERS,
    SET_INCIDENTS
} from './incidents.actions';

export interface SetIncidentsAction {
    type: typeof SET_INCIDENTS;
    payload: {
        listOfIncidents: Array<ListOfIncidents>;
    };
}

export interface CreateIncidentAction {
    type: typeof CREATE_INCIDENT;
    payload: {
        valuesCreateIncidentForm: ValuesCreateIncidentsForm;
    };
}

export interface DeleteIncidentAction {
    type: typeof DELETE_INCIDENT;
    payload: { incidentID: string };
}

export interface CloseModalAction {
    type: typeof CLOSE_MODAL;
}

export interface UpdateValuesCreateIncidentFormAction {
    type: typeof UPDATE_VALUES_CREATE_INCIDENT_FORM;
    payload: { updatedValue: ValuesCreateIncidentsForm };
}

export interface SetDataForUpdatingAction {
    type: typeof SET_DATA_FOR_UPDATING;
    payload: { incidentID: string };
}

export interface UpdateIncidentAction {
    type: typeof UPDATE_INCIDENT;
    payload: {
        updateData: {
            incidentID: string;
            incidentFormData: CreateIncident;
        };
    };
}

export interface ResetCreateIncidentFormAction {
    type: typeof RESET_CREATE_INCIDENT_FORM;
}

export interface GetUsersAction {
    type: typeof GET_USERS;
}

export interface SetUsersAction {
    type: typeof SET_USERS;
    payload: { users: Array<Users> };
}

export interface ChangeAssigneeUserIdAction {
    type: typeof CHANGE_ASSIGNEE_USER_ID;
    payload: { assigneeUserId: string };
}

export interface GetIncidentsAction {
    type: typeof GET_INCIDENTS;
}

export interface UpdateLoaderAction {
    type: typeof UPDATE_LOADER;
    payload: { isListOfIncidentsLoading: boolean };
}

export interface ChangeActionWithListOfIncidentsAction {
    type: typeof CHANGE_ACTION_WITH_LIST_OF_INCIDENTS;
    payload: { actionWithIncidents: ActionWithIncidents };
}

export type IncidentsActionsType =
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
    | ChangeAssigneeUserIdAction
    | GetIncidentsAction
    | UpdateLoaderAction
    | ChangeActionWithListOfIncidentsAction;
