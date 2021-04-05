import {
    CHANGE_ACTION_WITH_LIST_OF_INCIDENTS,
    CHANGE_ASSIGNEE_USER_ID,
    CLOSE_MODAL,
    RESET_CREATE_INCIDENT_FORM,
    SET_DATA_FOR_UPDATING,
    SET_INCIDENTS,
    SET_USERS,
    UPDATE_LOADER,
    UPDATE_VALUES_CREATE_INCIDENT_FORM
} from 'redux/store/actions/actionTypes';
import { getDate } from 'common/getDate';
import {
    ActionWithCreateIncidentFormType,
    ActionWithIncidentsType,
    IListOfIncidents,
    IUsers,
    IValuesCreateIncidentsForm
} from 'common/interfaces/incidents';
import { IncidentsType } from 'redux/store/actions/incidents/interfaces';

export type IncidentsInitialStateType = typeof initialState;

const initialState = {
    actionWithCreateIncidentForm: 'Создать' as ActionWithCreateIncidentFormType,
    actionWithIncidents: 'Показать все инциденты' as ActionWithIncidentsType,
    assigneeUserId: '',
    incidentID: '',
    isModalVisible: false,
    listOfIncidents: [] as Array<IListOfIncidents>,
    isListOfIncidentsLoading: false,
    users: [] as Array<IUsers>,
    valuesCreateIncidentForm: {
        area: '',
        assignee: '',
        description: '',
        dueDate: getDate(),
        incidentName: '',
        priority: '',
        startDate: getDate(),
        status: ''
    } as IValuesCreateIncidentsForm
};

function incidentsReducer(
    state = initialState,
    action: IncidentsType
): IncidentsInitialStateType {
    switch (action.type) {
        case SET_INCIDENTS:
            return {
                ...state,
                listOfIncidents: action.listOfIncidents,
                isModalVisible: false
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users,
                isModalVisible: true
            };
        case CHANGE_ASSIGNEE_USER_ID:
            return {
                ...state,
                assigneeUserId: action.assigneeUserId
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
                    ...action.updatedValue
                }
            };
        case SET_DATA_FOR_UPDATING:
            return {
                ...state,
                actionWithCreateIncidentForm: 'Обновить',
                incidentID: action.incidentID
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
                isListOfIncidentsLoading: action.isListOfIncidentsLoading
            };
        case CHANGE_ACTION_WITH_LIST_OF_INCIDENTS:
            return {
                ...state,
                actionWithIncidents: action.actionWithIncidents
            };
        default:
            return state;
    }
}

export default incidentsReducer;