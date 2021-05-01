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
    RESET_CREATE_INCIDENT_FORM,
    UPDATE_LOADER,
    CHANGE_ACTION_WITH_LIST_OF_INCIDENTS
} from 'redux/actions/actionTypes';
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
} from 'redux/actions/incidents/interfaces';
import {
    ActionWithIncidentsType,
    ListOfIncidents,
    Users,
    ValuesCreateIncidentsForm
} from 'common/types/incidents';

// Incidents
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
    changeActionWithListOfIncidents
};