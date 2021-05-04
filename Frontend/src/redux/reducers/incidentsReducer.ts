import { getDate } from 'common/helpers';
import {
    ActionWithCreateIncidentFormType,
    ActionWithIncidentsType,
    ListOfIncidents,
    Users,
    ValuesCreateIncidentsForm
} from 'common/types/incidents';
import { IncidentsType } from 'redux/actions/incidents/incidents.interfaces';
import {
    CHANGE_ACTION_WITH_LIST_OF_INCIDENTS,
    SET_USERS,
    UPDATE_LOADER,
    UPDATE_VALUES_CREATE_INCIDENT_FORM,
    SET_DATA_FOR_UPDATING,
    RESET_CREATE_INCIDENT_FORM,
    CLOSE_MODAL,
    CHANGE_ASSIGNEE_USER_ID,
    SET_INCIDENTS
} from '../actions/incidents/incidents.actions';

export type IncidentsInitialStateType = typeof initialState;

const initialState = {
    actionWithCreateIncidentForm: 'Создать' as ActionWithCreateIncidentFormType,
    actionWithIncidents: 'Показать все инциденты' as ActionWithIncidentsType,
    assigneeUserId: '',
    incidentID: '',
    isModalVisible: false,
    listOfIncidents: [] as Array<ListOfIncidents>,
    isListOfIncidentsLoading: false,
    users: [] as Array<Users>,
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
    action: IncidentsType
): IncidentsInitialStateType {
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
        case CHANGE_ASSIGNEE_USER_ID:
            return {
                ...state,
                ...action.payload
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
        case CHANGE_ACTION_WITH_LIST_OF_INCIDENTS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export default incidentsReducer;
