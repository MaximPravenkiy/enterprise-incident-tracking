import {
    CloseModalAction,
    CreateIncidentAction,
    DeleteIncidentAction,
    GetIncidentsAction,
    GetUsersAction,
    ResetCreateIncidentFormAction,
    SetDataForUpdatingAction,
    SetIncidentsAction,
    SetUsersAction,
    ShowAllIncidentsAction,
    ShowCreateIncidentAction,
    ShowEditIncidentAction,
    ShowOwnIncidentsAction,
    UpdateIncidentAction,
    UpdateLoaderAction,
    UpdateValuesCreateIncidentFormAction
} from 'redux/actions/incidents/incidents.interfaces';
import {
    CreateIncident,
    Incident,
    User,
    ValuesCreateIncidentsForm
} from 'common/types/incidents';

const SET_INCIDENTS = 'SET_INCIDENTS';
const SET_USERS = 'SET_USERS';
const CLOSE_MODAL = 'CLOSE_MODAL';
const UPDATE_VALUES_CREATE_INCIDENT_FORM = 'UPDATE_VALUES_CREATE_INCIDENT_FORM';
const SET_DATA_FOR_UPDATING = 'SET_DATA_FOR_UPDATING';
const UPDATE_LOADER = 'UPDATE_LOADER';
const GET_INCIDENTS = 'GET_INCIDENTS';
const GET_USERS = 'GET_USERS';
const CREATE_INCIDENT = 'CREATE_INCIDENT';
const DELETE_INCIDENT = 'DELETE_INCIDENT';
const UPDATE_INCIDENT = 'UPDATE_INCIDENT';
const SHOW_OWN_INCIDENTS = 'SHOW_OWN_INCIDENTS';
const SHOW_ALL_INCIDENTS = 'SHOW_ALL_INCIDENTS';
const SHOW_CREATE_INCIDENT_FORM = 'SHOW_CREATE_INCIDENT_FORM';
const SHOW_EDIT_INCIDENT_FORM = 'SHOW_EDIT_INCIDENT_FORM';
const RESET_CREATE_INCIDENT_FORM = 'RESET_CREATE_INCIDENT_FORM';

const getIncidents = (): GetIncidentsAction => ({ type: GET_INCIDENTS });

const setIncidents = (listOfIncidents: Incident[]): SetIncidentsAction => ({
    type: SET_INCIDENTS,
    payload: { listOfIncidents }
});

const createIncident = (
    valuesCreateIncidentForm: ValuesCreateIncidentsForm
): CreateIncidentAction => ({
    type: CREATE_INCIDENT,
    payload: { valuesCreateIncidentForm }
});

const deleteIncident = (incidentID: string): DeleteIncidentAction => ({
    type: DELETE_INCIDENT,
    payload: { incidentID }
});

const closeModal = (): CloseModalAction => ({ type: CLOSE_MODAL });

const updateValuesCreateIncidentForm = (
    updatedValue: ValuesCreateIncidentsForm
): UpdateValuesCreateIncidentFormAction => ({
    type: UPDATE_VALUES_CREATE_INCIDENT_FORM,
    payload: { updatedValue }
});

const resetCreateIncidentForm = (): ResetCreateIncidentFormAction => ({
    type: RESET_CREATE_INCIDENT_FORM
});

const setDataForUpdating = (
    editedIncidentId: string
): SetDataForUpdatingAction => ({
    type: SET_DATA_FOR_UPDATING,
    payload: { editedIncidentId }
});

const updateIncident = (
    incidentFormData: CreateIncident,
    editedIncidentId: string
): UpdateIncidentAction => ({
    type: UPDATE_INCIDENT,
    payload: { incidentFormData, editedIncidentId }
});

const updateLoader = (
    isListOfIncidentsLoading: boolean
): UpdateLoaderAction => ({
    type: UPDATE_LOADER,
    payload: { isListOfIncidentsLoading }
});

const getUsers = (): GetUsersAction => ({ type: GET_USERS });

const setUsers = (users: User[]): SetUsersAction => ({
    type: SET_USERS,
    payload: { users }
});

const showOwnIncidents = (): ShowOwnIncidentsAction => ({
    type: SHOW_OWN_INCIDENTS
});

const showAllIncidents = (): ShowAllIncidentsAction => ({
    type: SHOW_ALL_INCIDENTS
});

const showCreateIncident = (): ShowCreateIncidentAction => ({
    type: SHOW_CREATE_INCIDENT_FORM
});

const showEditIncident = (): ShowEditIncidentAction => ({
    type: SHOW_EDIT_INCIDENT_FORM
});

export {
    getIncidents,
    setIncidents,
    getUsers,
    setUsers,
    createIncident,
    closeModal,
    deleteIncident,
    updateValuesCreateIncidentForm,
    updateIncident,
    setDataForUpdating,
    updateLoader,
    showOwnIncidents,
    showAllIncidents,
    showCreateIncident,
    showEditIncident,
    resetCreateIncidentForm,
    UPDATE_INCIDENT,
    DELETE_INCIDENT,
    CREATE_INCIDENT,
    GET_USERS,
    GET_INCIDENTS,
    UPDATE_LOADER,
    SET_DATA_FOR_UPDATING,
    UPDATE_VALUES_CREATE_INCIDENT_FORM,
    CLOSE_MODAL,
    SET_USERS,
    SET_INCIDENTS,
    SHOW_OWN_INCIDENTS,
    SHOW_ALL_INCIDENTS,
    SHOW_EDIT_INCIDENT_FORM,
    SHOW_CREATE_INCIDENT_FORM,
    RESET_CREATE_INCIDENT_FORM
};
