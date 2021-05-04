import {
    ChangeActionWithListOfIncidentsActionType,
    ChangeAssigneeUserIdActionType,
    CloseModalActionType,
    CreateIncidentActionType,
    DeleteIncidentActionType,
    GetIncidentsActionType,
    GetUsersActionType,
    ResetCreateIncidentFormActionType,
    SetDataForUpdatingActionType,
    SetIncidentsActionType,
    SetUsersActionType,
    UpdateIncidentActionType,
    UpdateLoaderActionType,
    UpdateValuesCreateIncidentFormActionType
} from 'redux/actions/incidents/incidents.interfaces';
import {
    ActionWithIncidentsType,
    ListOfIncidents,
    Users,
    ValuesCreateIncidentsForm
} from 'common/types/incidents';

const SET_INCIDENTS = 'SET_INCIDENTS';
const SET_USERS = 'SET_USERS';
const CHANGE_ASSIGNEE_USER_ID = 'CHANGE_ASSIGNEE_USER_ID';
const CLOSE_MODAL = 'CLOSE_MODAL';
const UPDATE_VALUES_CREATE_INCIDENT_FORM = 'UPDATE_VALUES_CREATE_INCIDENT_FORM';
const RESET_CREATE_INCIDENT_FORM = 'RESET_CREATE_INCIDENT_FORM';
const SET_DATA_FOR_UPDATING = 'SET_DATA_FOR_UPDATING';
const UPDATE_LOADER = 'UPDATE_LOADER';
const CHANGE_ACTION_WITH_LIST_OF_INCIDENTS =
    'CHANGE_ACTION_WITH_LIST_OF_INCIDENTS';
const GET_INCIDENTS = 'GET_INCIDENTS';
const GET_USERS = 'GET_USERS';
const CREATE_INCIDENT = 'CREATE_INCIDENT';
const DELETE_INCIDENT = 'DELETE_INCIDENT';
const UPDATE_INCIDENT = 'UPDATE_INCIDENT';

const getIncidents = (): GetIncidentsActionType => ({ type: GET_INCIDENTS });

const setIncidents = (payload: {
    listOfIncidents: ListOfIncidents[];
}): SetIncidentsActionType => ({ type: SET_INCIDENTS, payload });

const createIncident = (payload: {
    valuesCreateIncidentForm: ValuesCreateIncidentsForm;
}): CreateIncidentActionType => ({
    type: CREATE_INCIDENT,
    payload
});

const deleteIncident = (payload: {
    incidentID: string;
}): DeleteIncidentActionType => ({
    type: DELETE_INCIDENT,
    payload
});

const closeModal = (): CloseModalActionType => ({ type: CLOSE_MODAL });

const updateValuesCreateIncidentForm = (payload: {
    updatedValue: ValuesCreateIncidentsForm;
}): UpdateValuesCreateIncidentFormActionType => ({
    type: UPDATE_VALUES_CREATE_INCIDENT_FORM,
    payload
});

const setDataForUpdating = (payload: {
    incidentID: string;
}): SetDataForUpdatingActionType => ({
    type: SET_DATA_FOR_UPDATING,
    payload
});

const updateIncident = (
    payload: UpdateIncidentActionType['payload']
): UpdateIncidentActionType => ({ type: UPDATE_INCIDENT, payload });

const resetCreateIncidentForm = (): ResetCreateIncidentFormActionType => ({
    type: RESET_CREATE_INCIDENT_FORM
});

const changeActionWithListOfIncidents = (payload: {
    actionWithIncidents: ActionWithIncidentsType;
}): ChangeActionWithListOfIncidentsActionType => ({
    type: CHANGE_ACTION_WITH_LIST_OF_INCIDENTS,
    payload
});

const updateLoader = (payload: {
    isListOfIncidentsLoading: boolean;
}): UpdateLoaderActionType => ({
    type: UPDATE_LOADER,
    payload
});

// Users
const getUsers = (): GetUsersActionType => ({ type: GET_USERS });

const setUsers = (payload: { users: Array<Users> }): SetUsersActionType => ({
    type: SET_USERS,
    payload
});

const changeAssigneeUserId = (payload: {
    assigneeUserId: string;
}): ChangeAssigneeUserIdActionType => ({
    type: CHANGE_ASSIGNEE_USER_ID,
    payload
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
    resetCreateIncidentForm,
    updateLoader,
    changeActionWithListOfIncidents,
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
    CLOSE_MODAL,
    CHANGE_ASSIGNEE_USER_ID,
    SET_USERS,
    SET_INCIDENTS
};
