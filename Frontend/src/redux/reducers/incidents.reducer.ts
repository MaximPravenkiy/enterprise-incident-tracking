import { getDate } from 'common/helpers';
import {
    Incident,
    PriorityType,
    User,
    ValuesCreateIncidentsForm
} from 'common/types/incidents';
import { IncidentsActions } from 'redux/actions/incidents/incidents.interfaces';
import {
    CLOSE_MODAL,
    RESET_CREATE_INCIDENT_FORM,
    SET_DATA_FOR_UPDATING,
    SET_INCIDENTS,
    SET_USERS,
    SHOW_ALL_INCIDENTS,
    SHOW_CREATE_INCIDENT_FORM,
    SHOW_EDIT_INCIDENT_FORM,
    SHOW_OWN_INCIDENTS,
    UPDATE_LOADER,
    UPDATE_VALUES_CREATE_INCIDENT_FORM
} from 'redux/actions/incidents/incidents.actions';

interface IncidentsInitialState {
    isOwnIncidents: boolean;
    editedIncidentId: string;
    isCreateModalVisible: boolean;
    isEditModalVisible: boolean;
    listOfIncidents: Incident[];
    isListOfIncidentsLoading: boolean;
    users: User[];
    valuesCreateIncidentForm: ValuesCreateIncidentsForm;
}

const initialState = {
    isOwnIncidents: true,
    editedIncidentId: '',
    isCreateModalVisible: false,
    isEditModalVisible: false,
    listOfIncidents: [] as Incident[],
    isListOfIncidentsLoading: false,
    users: [] as User[],
    valuesCreateIncidentForm: {
        area: '',
        assignee: '',
        description: '',
        dueDate: getDate(),
        incidentName: '',
        priority: '' as PriorityType,
        startDate: getDate(),
        status: ''
    } as ValuesCreateIncidentsForm
};

function incidentsReducer(
    state = initialState,
    action: IncidentsActions
): IncidentsInitialState {
    switch (action.type) {
        case SET_INCIDENTS:
            return {
                ...state,
                ...action.payload
            };
        case SET_USERS:
            return {
                ...state,
                ...action.payload
            };
        case SHOW_CREATE_INCIDENT_FORM:
            return {
                ...state,
                isCreateModalVisible: true
            };
        case SHOW_EDIT_INCIDENT_FORM:
            return {
                ...state,
                isEditModalVisible: true
            };
        case CLOSE_MODAL:
            return {
                ...state,
                isCreateModalVisible: false,
                isEditModalVisible: false
            };
        case UPDATE_VALUES_CREATE_INCIDENT_FORM:
            return {
                ...state,
                valuesCreateIncidentForm: {
                    ...state.valuesCreateIncidentForm,
                    ...action.payload.updatedValue
                }
            };
        case SET_DATA_FOR_UPDATING:
            return {
                ...state,
                ...action.payload
            };
        case RESET_CREATE_INCIDENT_FORM:
            return {
                ...state,
                valuesCreateIncidentForm: initialState.valuesCreateIncidentForm
            };
        case UPDATE_LOADER:
            return {
                ...state,
                ...action.payload
            };
        case SHOW_OWN_INCIDENTS:
            return {
                ...state,
                isOwnIncidents: true
            };
        case SHOW_ALL_INCIDENTS:
            return {
                ...state,
                isOwnIncidents: false
            };
        default:
            return state;
    }
}

export default incidentsReducer;
