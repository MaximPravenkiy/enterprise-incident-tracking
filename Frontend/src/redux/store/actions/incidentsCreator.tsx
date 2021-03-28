import {
    CHANGE_ASSIGNEE_USER_ID,
    SET_INCIDENTS,
    GET_USERS,
    GET_INCIDENTS,
    SET_USERS,
    CREATE_INCIDENT,
    CLOSE_MODAL,
    DELETE_INCIDENT,
    UPDATE_VALUES_CREATE_INCIDENT_FORM,
    UPDATE_INCIDENT,
    SET_DATA_FOR_UPDATING, RESET_CREATE_INCIDENT_FORM
} from "./actionTypes";
import {ListOfIncidentsTypes, UsersTypes, ValuesCreateIncidentFormTypes} from "../reducers/incidentsReducer";

// Incidents
type GetIncidentsActionType = {
    type: typeof GET_INCIDENTS
}
const getIncidents = ()
    : GetIncidentsActionType =>
    ({ type: GET_INCIDENTS })

type SetIncidentsActionType = {
    type: typeof SET_INCIDENTS,
    listOfIncidents: ListOfIncidentsTypes
}
const setIncidents = (listOfIncidents: ListOfIncidentsTypes)
    : SetIncidentsActionType =>
    ({ type: SET_INCIDENTS, listOfIncidents })

type CreateIncidentActionType = {
    type: typeof CREATE_INCIDENT,
    valuesCreateIncidentForm: ValuesCreateIncidentFormTypes
}
const createIncident = (valuesCreateIncidentForm: ValuesCreateIncidentFormTypes)
    : CreateIncidentActionType =>
    ({ type: CREATE_INCIDENT, valuesCreateIncidentForm })

type DeleteIncidentActionType = {
    type: typeof DELETE_INCIDENT,
    incidentID: string
}
const deleteIncident = (incidentID: string)
    : DeleteIncidentActionType =>
    ({ type: DELETE_INCIDENT, incidentID })

type CloseModalActionType = {
    type: typeof CLOSE_MODAL
}
const closeModal = ()
    : CloseModalActionType =>
    ({ type: CLOSE_MODAL })

type UpdateValuesCreateIncidentFormActionType = {
    type: typeof UPDATE_VALUES_CREATE_INCIDENT_FORM,
    updatedValue: ValuesCreateIncidentFormTypes
}
const updateValuesCreateIncidentForm = (updatedValue: ValuesCreateIncidentFormTypes)
    : UpdateValuesCreateIncidentFormActionType =>
    ({ type: UPDATE_VALUES_CREATE_INCIDENT_FORM, updatedValue })

type SetDataForUpdatingActionType = {
    type: typeof SET_DATA_FOR_UPDATING,
    incidentID: string
}
const setDataForUpdating = (incidentID: string)
    : SetDataForUpdatingActionType =>
    ({ type: SET_DATA_FOR_UPDATING, incidentID })

type UpdateIncidentActionType = {
    type: typeof UPDATE_INCIDENT,
    updateData: {
        incidentID: string,
        values: ValuesCreateIncidentFormTypes & { owner: string }
    }
}
const updateIncident = (updateData: UpdateIncidentActionType["updateData"])
    : UpdateIncidentActionType =>
    ({ type: UPDATE_INCIDENT, updateData })

type ResetCreateIncidentFormActionType = {
    type: typeof RESET_CREATE_INCIDENT_FORM
}
const resetCreateIncidentForm = ()
    : ResetCreateIncidentFormActionType =>
    ({ type: RESET_CREATE_INCIDENT_FORM })

// Users
type GetUsersActionType = {
    type: typeof GET_USERS
}
const getUsers = ()
    : GetUsersActionType =>
    ({ type: GET_USERS })

type SetUsersActionType = {
    type: typeof SET_USERS,
    users: UsersTypes
}
const setUsers = (users: UsersTypes)
    : SetUsersActionType =>
    ({ type: SET_USERS, users })

type ChangeAssigneeUserIdActionType = {
    type: typeof CHANGE_ASSIGNEE_USER_ID,
    assigneeUserId: string
}
const changeAssigneeUserId = (assigneeUserId: string)
    : ChangeAssigneeUserIdActionType =>
    ({ type: CHANGE_ASSIGNEE_USER_ID, assigneeUserId })

export {
    getIncidents,
    setIncidents,
    getUsers,
    setUsers,
    changeAssigneeUserId,
    createIncident,
    closeModal,
    deleteIncident,
    updateValuesCreateIncidentForm,
    updateIncident,
    setDataForUpdating,
    resetCreateIncidentForm
};