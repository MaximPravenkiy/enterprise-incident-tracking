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
import {ListOfIncidentsTypes, ValuesCreateIncidentFormTypes} from "../reducers/incidentsReducer";

// Incidents
type GetIncidentsType = {
    type: typeof GET_INCIDENTS
}
const getIncidents = (): GetIncidentsType => ({ type: GET_INCIDENTS })
type SetIncidentsType = {
    type: typeof SET_INCIDENTS,
    listOfIncidents: ListOfIncidentsTypes
}
const setIncidents = (listOfIncidents: ListOfIncidentsTypes): SetIncidentsType => ({ type: SET_INCIDENTS, listOfIncidents })
type CreateIncidentType = {
    type: typeof CREATE_INCIDENT,
    valuesCreateIncidentForm: ValuesCreateIncidentFormTypes
}
const createIncident = (valuesCreateIncidentForm: ValuesCreateIncidentFormTypes): CreateIncidentType => ({ type: CREATE_INCIDENT, valuesCreateIncidentForm })

const deleteIncident = (incidentID: any) => ({ type: DELETE_INCIDENT, incidentID })

const closeModal = () => ({ type: CLOSE_MODAL })

const updateValuesCreateIncidentForm = (value: any) => ({ type: UPDATE_VALUES_CREATE_INCIDENT_FORM, value })

const setDataForUpdating = (value: any) => ({ type: SET_DATA_FOR_UPDATING, value })

const updateIncident = (updateData: any) => ({ type: UPDATE_INCIDENT, updateData })

const resetCreateIncidentForm = () => ({ type: RESET_CREATE_INCIDENT_FORM })

// Users
const getUsers = () => ({ type: GET_USERS })

const setUsers = (users: any) => ({ type: SET_USERS, users })

const changeAssigneeUserId = (assigneeUserId: any) => ({ type: CHANGE_ASSIGNEE_USER_ID, assigneeUserId })

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