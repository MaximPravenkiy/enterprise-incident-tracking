import {
    ActionWithIncidents,
    CreateIncident,
    ListOfIncidents,
    Users,
    ValuesCreateIncidentsForm
} from 'common/types/incidents';
import {
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
    CHANGE_ASSIGNEE_USER_ID,
    CLOSE_MODAL,
    SET_USERS,
    SET_INCIDENTS
} from './incidents.actions';

interface SetIncidentsAction {
    type: typeof SET_INCIDENTS;
    payload: {
        listOfIncidents: ListOfIncidents[];
    };
}

interface CreateIncidentAction {
    type: typeof CREATE_INCIDENT;
    payload: {
        valuesCreateIncidentForm: ValuesCreateIncidentsForm;
    };
}

interface DeleteIncidentAction {
    type: typeof DELETE_INCIDENT;
    payload: { incidentID: string };
}

interface CloseModalAction {
    type: typeof CLOSE_MODAL;
}

interface UpdateValuesCreateIncidentFormAction {
    type: typeof UPDATE_VALUES_CREATE_INCIDENT_FORM;
    payload: { updatedValue: ValuesCreateIncidentsForm };
}

interface SetDataForUpdatingAction {
    type: typeof SET_DATA_FOR_UPDATING;
    payload: { incidentID: string };
}

interface UpdateIncidentAction {
    type: typeof UPDATE_INCIDENT;
    payload: {
        updateData: {
            incidentID: string;
            incidentFormData: CreateIncident;
        };
    };
}

interface ResetCreateIncidentFormAction {
    type: typeof RESET_CREATE_INCIDENT_FORM;
}

interface GetUsersAction {
    type: typeof GET_USERS;
}

interface SetUsersAction {
    type: typeof SET_USERS;
    payload: { users: Users[] };
}

interface ChangeAssigneeUserIdAction {
    type: typeof CHANGE_ASSIGNEE_USER_ID;
    payload: { assigneeUserId: string };
}

interface GetIncidentsAction {
    type: typeof GET_INCIDENTS;
}

interface UpdateLoaderAction {
    type: typeof UPDATE_LOADER;
    payload: { isListOfIncidentsLoading: boolean };
}

interface ChangeActionWithListOfIncidentsAction {
    type: typeof CHANGE_ACTION_WITH_LIST_OF_INCIDENTS;
    payload: { actionWithIncidents: ActionWithIncidents };
}

type IncidentsActions =
    | SetIncidentsAction
    | CreateIncidentAction
    | DeleteIncidentAction
    | CloseModalAction
    | UpdateValuesCreateIncidentFormAction
    | SetDataForUpdatingAction
    | UpdateIncidentAction
    | ResetCreateIncidentFormAction
    | GetUsersAction
    | SetUsersAction
    | ChangeAssigneeUserIdAction
    | GetIncidentsAction
    | UpdateLoaderAction
    | ChangeActionWithListOfIncidentsAction;

export type {
    IncidentsActions,
    SetIncidentsAction,
    CreateIncidentAction,
    DeleteIncidentAction,
    CloseModalAction,
    UpdateValuesCreateIncidentFormAction,
    SetDataForUpdatingAction,
    UpdateIncidentAction,
    ResetCreateIncidentFormAction,
    GetUsersAction,
    SetUsersAction,
    ChangeAssigneeUserIdAction,
    GetIncidentsAction,
    UpdateLoaderAction,
    ChangeActionWithListOfIncidentsAction
};
