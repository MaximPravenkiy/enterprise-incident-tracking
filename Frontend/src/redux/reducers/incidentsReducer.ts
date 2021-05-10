import { getDate } from 'common/helpers';
import {
    ActionWithCreateIncidentForm,
    Incident,
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
    SHOW_OWN_INCIDENTS,
    UPDATE_LOADER,
    UPDATE_VALUES_CREATE_INCIDENT_FORM
} from 'redux/actions/incidents/incidents.actions';

export type IncidentsInitialState = typeof initialState;

const initialState = {
    actionWithCreateIncidentForm: 'Создать' as ActionWithCreateIncidentForm,
    isOwnIncidents: true,
    incidentID: '',
    isModalVisible: false,
    listOfIncidents: [] as Incident[],
    isListOfIncidentsLoading: false,
    users: [] as User[],
    valuesCreateIncidentForm: {
        area: '',
        assignee: '',
        description: '',
        dueDate: getDate(),
        incidentName: '',
        priority: '',
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
                ...action.payload,
                isModalVisible: false
            };
        case SET_USERS:
            return {
                ...state,
                ...action.payload,
                isModalVisible: true
            };
        case CLOSE_MODAL:
            return {
                ...state,
                isModalVisible: false
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
                actionWithCreateIncidentForm: 'Обновить',
                ...action.payload
            };
        case RESET_CREATE_INCIDENT_FORM:
            return {
                ...state,
                actionWithCreateIncidentForm:
                    initialState.actionWithCreateIncidentForm,
                incidentID: initialState.incidentID,
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
