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
    SET_DATA_FOR_UPDATING,
    RESET_CREATE_INCIDENT_FORM
} from './actionTypes';
import {
    ChangeAssigneeUserIdActionType,
    CloseModalActionType,
    CreateIncidentActionType,
    DeleteIncidentActionType,
    GetIncidentsActionType,
    GetUsersActionType,
    ListOfIncidentsTypes,
    ResetCreateIncidentFormActionType,
    SetDataForUpdatingActionType,
    SetIncidentsActionType,
    SetUsersActionType,
    UpdateIncidentActionType,
    UpdateValuesCreateIncidentFormActionType,
    UsersTypes,
    ValuesCreateIncidentFormTypes
} from '../reducers/incidentsReducer';

// Incidents
const getIncidents = (): GetIncidentsActionType => {
    console.log('GET INCID');
    return { type: GET_INCIDENTS };
};

const setIncidents = (
    listOfIncidents: Array<ListOfIncidentsTypes>
): SetIncidentsActionType => ({ type: SET_INCIDENTS, listOfIncidents });

const createIncident = (
    valuesCreateIncidentForm: ValuesCreateIncidentFormTypes
): CreateIncidentActionType => ({
    type: CREATE_INCIDENT,
    valuesCreateIncidentForm
});

const deleteIncident = (incidentID: string): DeleteIncidentActionType => ({
    type: DELETE_INCIDENT,
    incidentID
});

const closeModal = (): CloseModalActionType => ({ type: CLOSE_MODAL });

const updateValuesCreateIncidentForm = (
    updatedValue: ValuesCreateIncidentFormTypes
): UpdateValuesCreateIncidentFormActionType => ({
    type: UPDATE_VALUES_CREATE_INCIDENT_FORM,
    updatedValue
});

const setDataForUpdating = (
    incidentID: string
): SetDataForUpdatingActionType => ({
    type: SET_DATA_FOR_UPDATING,
    incidentID
});

const updateIncident = (
    updateData: UpdateIncidentActionType['updateData']
): UpdateIncidentActionType => ({ type: UPDATE_INCIDENT, updateData });

const resetCreateIncidentForm = (): ResetCreateIncidentFormActionType => ({
    type: RESET_CREATE_INCIDENT_FORM
});

// Users
const getUsers = (): GetUsersActionType => ({ type: GET_USERS });

const setUsers = (users: Array<UsersTypes>): SetUsersActionType => ({
    type: SET_USERS,
    users
});

const changeAssigneeUserId = (
    assigneeUserId: string
): ChangeAssigneeUserIdActionType => ({
    type: CHANGE_ASSIGNEE_USER_ID,
    assigneeUserId
});

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
