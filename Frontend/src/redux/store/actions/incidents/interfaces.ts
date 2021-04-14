import {
    CHANGE_ACTION_WITH_LIST_OF_INCIDENTS,
    CHANGE_ASSIGNEE_USER_ID,
    CLOSE_MODAL,
    CREATE_INCIDENT,
    DELETE_INCIDENT,
    GET_INCIDENTS,
    GET_USERS,
    RESET_CREATE_INCIDENT_FORM,
    SET_DATA_FOR_UPDATING,
    SET_INCIDENTS,
    SET_USERS,
    UPDATE_INCIDENT,
    UPDATE_LOADER,
    UPDATE_VALUES_CREATE_INCIDENT_FORM
} from 'redux/store/actions/actionTypes';
import {
    ActionWithIncidentsType,
    CreateIncident,
    ListOfIncidents,
    Users,
    ValuesCreateIncidentsForm
} from 'common/interfaces/incidents';

export interface SetIncidentsActionType {
    type: typeof SET_INCIDENTS;
    listOfIncidents: Array<ListOfIncidents>;
}

export interface CreateIncidentActionType {
    type: typeof CREATE_INCIDENT;
    valuesCreateIncidentForm: ValuesCreateIncidentsForm;
}

export interface DeleteIncidentActionType {
    type: typeof DELETE_INCIDENT;
    incidentID: string;
}

export interface CloseModalActionType {
    type: typeof CLOSE_MODAL;
}

export interface UpdateValuesCreateIncidentFormActionType {
    type: typeof UPDATE_VALUES_CREATE_INCIDENT_FORM;
    updatedValue: ValuesCreateIncidentsForm;
}

export interface SetDataForUpdatingActionType {
    type: typeof SET_DATA_FOR_UPDATING;
    incidentID: string;
}

export interface UpdateIncidentActionType {
    type: typeof UPDATE_INCIDENT;
    updateData: {
        incidentID: string;
        incidentFormData: CreateIncident;
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
    users: Array<Users>;
}

export interface ChangeAssigneeUserIdActionType {
    type: typeof CHANGE_ASSIGNEE_USER_ID;
    assigneeUserId: string;
}

export interface GetIncidentsActionType {
    type: typeof GET_INCIDENTS;
}

export interface UpdateLoaderActionType {
    type: typeof UPDATE_LOADER;
    isListOfIncidentsLoading: boolean;
}

export interface ChangeActionWithListOfIncidentsActionType {
    type: typeof CHANGE_ACTION_WITH_LIST_OF_INCIDENTS;
    actionWithIncidents: ActionWithIncidentsType;
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
