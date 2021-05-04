import {
    ActionWithIncidentsType,
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

export interface SetIncidentsActionType {
    type: typeof SET_INCIDENTS;
    payload: {
        listOfIncidents: Array<ListOfIncidents>;
    };
}

export interface CreateIncidentActionType {
    type: typeof CREATE_INCIDENT;
    payload: {
        valuesCreateIncidentForm: ValuesCreateIncidentsForm;
    };
}

export interface DeleteIncidentActionType {
    type: typeof DELETE_INCIDENT;
    payload: { incidentID: string };
}

export interface CloseModalActionType {
    type: typeof CLOSE_MODAL;
}

export interface UpdateValuesCreateIncidentFormActionType {
    type: typeof UPDATE_VALUES_CREATE_INCIDENT_FORM;
    payload: { updatedValue: ValuesCreateIncidentsForm };
}

export interface SetDataForUpdatingActionType {
    type: typeof SET_DATA_FOR_UPDATING;
    payload: { incidentID: string };
}

export interface UpdateIncidentActionType {
    type: typeof UPDATE_INCIDENT;
    payload: {
        updateData: {
            incidentID: string;
            incidentFormData: CreateIncident;
        };
    };
}

export interface ResetCreateIncidentFormActionType {
    type: typeof RESET_CREATE_INCIDENT_FORM;
}

export interface GetUsersActionType {
    type: typeof GET_USERS;
}

export interface SetUsersActionType {
    type: typeof SET_USERS;
    payload: { users: Array<Users> };
}

export interface ChangeAssigneeUserIdActionType {
    type: typeof CHANGE_ASSIGNEE_USER_ID;
    payload: { assigneeUserId: string };
}

export interface GetIncidentsActionType {
    type: typeof GET_INCIDENTS;
}

export interface UpdateLoaderActionType {
    type: typeof UPDATE_LOADER;
    payload: { isListOfIncidentsLoading: boolean };
}

export interface ChangeActionWithListOfIncidentsActionType {
    type: typeof CHANGE_ACTION_WITH_LIST_OF_INCIDENTS;
    payload: { actionWithIncidents: ActionWithIncidentsType };
}

export type IncidentsType =
    | SetIncidentsActionType
    | CreateIncidentActionType
    | DeleteIncidentActionType
    | CloseModalActionType
    | UpdateValuesCreateIncidentFormActionType
    | SetDataForUpdatingActionType
    | UpdateIncidentActionType
    | ResetCreateIncidentFormActionType
    | GetUsersActionType
    | SetUsersActionType
    | ChangeAssigneeUserIdActionType
    | GetIncidentsActionType
    | UpdateLoaderActionType
    | ChangeActionWithListOfIncidentsActionType;
