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
    ShowOwnIncidentsAction,
    UpdateIncidentAction,
    UpdateLoaderAction,
    UpdateValuesCreateIncidentFormAction
} from 'redux/actions/incidents/incidents.interfaces';
import {
    Incident,
    User,
    ValuesCreateIncidentsForm
} from 'common/types/incidents';

const SET_INCIDENTS = 'SET_INCIDENTS';
const SET_USERS = 'SET_USERS';
const CLOSE_MODAL = 'CLOSE_MODAL';
const UPDATE_VALUES_CREATE_INCIDENT_FORM = 'UPDATE_VALUES_CREATE_INCIDENT_FORM';
const RESET_CREATE_INCIDENT_FORM = 'RESET_CREATE_INCIDENT_FORM';
const SET_DATA_FOR_UPDATING = 'SET_DATA_FOR_UPDATING';
const UPDATE_LOADER = 'UPDATE_LOADER';
const GET_INCIDENTS = 'GET_INCIDENTS';
const GET_USERS = 'GET_USERS';
const CREATE_INCIDENT = 'CREATE_INCIDENT';
const DELETE_INCIDENT = 'DELETE_INCIDENT';
const UPDATE_INCIDENT = 'UPDATE_INCIDENT';
const SHOW_OWN_INCIDENTS = 'SHOW_OWN_INCIDENTS';
const SHOW_ALL_INCIDENTS = 'SHOW_ALL_INCIDENTS';

const getIncidents = (): GetIncidentsAction => ({ type: GET_INCIDENTS });

const setIncidents = (payload: {
    listOfIncidents: Incident[];
}): SetIncidentsAction => ({ type: SET_INCIDENTS, payload });

const createIncident = (payload: {
    valuesCreateIncidentForm: ValuesCreateIncidentsForm;
}): CreateIncidentAction => ({
    type: CREATE_INCIDENT,
    payload
});

const deleteIncident = (payload: {
    incidentID: string;
}): DeleteIncidentAction => ({
    type: DELETE_INCIDENT,
    payload
});

const closeModal = (): CloseModalAction => ({ type: CLOSE_MODAL });

const updateValuesCreateIncidentForm = (payload: {
    updatedValue: ValuesCreateIncidentsForm;
}): UpdateValuesCreateIncidentFormAction => ({
    type: UPDATE_VALUES_CREATE_INCIDENT_FORM,
    payload
});

const setDataForUpdating = (payload: {
    incidentID: string;
}): SetDataForUpdatingAction => ({
    type: SET_DATA_FOR_UPDATING,
    payload
});

const updateIncident = (
    payload: UpdateIncidentAction['payload']
): UpdateIncidentAction => ({ type: UPDATE_INCIDENT, payload });

const resetCreateIncidentForm = (): ResetCreateIncidentFormAction => ({
    type: RESET_CREATE_INCIDENT_FORM
});

const updateLoader = (payload: {
    isListOfIncidentsLoading: boolean;
}): UpdateLoaderAction => ({
    type: UPDATE_LOADER,
    payload
});

const getUsers = (): GetUsersAction => ({ type: GET_USERS });

const setUsers = (payload: { users: User[] }): SetUsersAction => ({
    type: SET_USERS,
    payload
});

const showOwnIncidents = (): ShowOwnIncidentsAction => ({
    type: SHOW_OWN_INCIDENTS
});

const showAllIncidents = (): ShowAllIncidentsAction => ({
    type: SHOW_ALL_INCIDENTS
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
    resetCreateIncidentForm,
    updateLoader,
    showOwnIncidents,
    showAllIncidents,
    UPDATE_INCIDENT,
    DELETE_INCIDENT,
    CREATE_INCIDENT,
    GET_USERS,
    GET_INCIDENTS,
    UPDATE_LOADER,
    SET_DATA_FOR_UPDATING,
    RESET_CREATE_INCIDENT_FORM,
    UPDATE_VALUES_CREATE_INCIDENT_FORM,
    CLOSE_MODAL,
    SET_USERS,
    SET_INCIDENTS,
    SHOW_OWN_INCIDENTS,
    SHOW_ALL_INCIDENTS
};
