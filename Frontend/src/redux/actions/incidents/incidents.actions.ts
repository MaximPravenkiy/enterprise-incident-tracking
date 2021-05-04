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

const setIncidents = (
    listOfIncidents: Array<ListOfIncidents>
): SetIncidentsActionType => ({ type: SET_INCIDENTS, listOfIncidents });

const createIncident = (
    valuesCreateIncidentForm: ValuesCreateIncidentsForm
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
    updatedValue: ValuesCreateIncidentsForm
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

const changeActionWithListOfIncidents = (
    actionWithIncidents: ActionWithIncidentsType
): ChangeActionWithListOfIncidentsActionType => ({
    type: CHANGE_ACTION_WITH_LIST_OF_INCIDENTS,
    actionWithIncidents
});

const updateLoader = (
    isListOfIncidentsLoading: boolean
): UpdateLoaderActionType => ({
    type: UPDATE_LOADER,
    isListOfIncidentsLoading
});

// Users
const getUsers = (): GetUsersActionType => ({ type: GET_USERS });

const setUsers = (users: Array<Users>): SetUsersActionType => ({
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
