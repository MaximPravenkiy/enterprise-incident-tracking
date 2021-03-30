import {
    CHANGE_ASSIGNEE_USER_ID,
    CLOSE_MODAL,
    CREATE_INCIDENT,
    DELETE_INCIDENT, GET_INCIDENTS, GET_USERS, RESET_CREATE_INCIDENT_FORM, SET_DATA_FOR_UPDATING,
    SET_INCIDENTS, SET_USERS, UPDATE_INCIDENT,
    UPDATE_VALUES_CREATE_INCIDENT_FORM
} from "../actionTypes";
import {
    CreateIncidentTypes,
    ListOfIncidentsTypes,
    UsersTypes,
    ValuesCreateIncidentFormTypes
} from "../../reducers/incidentsReducer";

export type SetIncidentsActionType = {
    type: typeof SET_INCIDENTS,
    listOfIncidents: Array<ListOfIncidentsTypes>
}

export type CreateIncidentActionType = {
    type: typeof CREATE_INCIDENT,
    valuesCreateIncidentForm: ValuesCreateIncidentFormTypes
}

export type DeleteIncidentActionType = {
    type: typeof DELETE_INCIDENT,
    incidentID: string
}

export type CloseModalActionType = {
    type: typeof CLOSE_MODAL
}

export type UpdateValuesCreateIncidentFormActionType = {
    type: typeof UPDATE_VALUES_CREATE_INCIDENT_FORM,
    updatedValue: ValuesCreateIncidentFormTypes
}

export type SetDataForUpdatingActionType = {
    type: typeof SET_DATA_FOR_UPDATING,
    incidentID: string
}

export type UpdateIncidentActionType = {
    type: typeof UPDATE_INCIDENT,
    updateData: {
        incidentID: string,
        values: CreateIncidentTypes
    }
}

export type ResetCreateIncidentFormActionType = {
    type: typeof RESET_CREATE_INCIDENT_FORM
}

export type GetUsersActionType = {
    type: typeof GET_USERS
}

export type SetUsersActionType = {
    type: typeof SET_USERS,
    users: Array<UsersTypes>
}

export type ChangeAssigneeUserIdActionType = {
    type: typeof CHANGE_ASSIGNEE_USER_ID,
    assigneeUserId: string
}

export type GetIncidentsActionType = {
    type: typeof GET_INCIDENTS
}

export type IncidentsType = SetIncidentsActionType | CreateIncidentActionType |
    DeleteIncidentActionType | CloseModalActionType | UpdateValuesCreateIncidentFormActionType |
    SetDataForUpdatingActionType | UpdateIncidentActionType | ResetCreateIncidentFormActionType |
    GetUsersActionType | SetUsersActionType | ChangeAssigneeUserIdActionType | GetIncidentsActionType