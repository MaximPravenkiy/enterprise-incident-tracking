import {
    CHANGE_ASSIGNEE_USER_ID,
    CLOSE_MODAL, SET_DATA_FOR_UPDATING,
    SET_INCIDENTS,
    SET_USERS,
    UPDATE_VALUES_CREATE_INCIDENT_FORM
} from '../actions/actionTypes';
import moment from "moment";

export function getDate(date: any = new Date()) {
    return moment(date, 'YYYY-MM-DD');
}

const initialState = {
    actionWithCreateIncidentForm: 'Создать',
    assigneeUserId: '',
    incidentID: '',
    isModalVisible: false,
    listOfIncidents: [],
    popUpMessage: '',
    users: [],
    valuesCreateIncidentForm: {
        incidentName: '',
        assignee: '',
        area: '',
        startDate: getDate(),
        dueDate: getDate(),
        description: '',
        priority: '',
        status: ''
    }
}

function incidentsReducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_INCIDENTS:
            return {
                ...state,
                listOfIncidents: action.listOfIncidents,
                isModalVisible: false,
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
                    ...action.value
                },
            };
        case SET_DATA_FOR_UPDATING:
            return {
                ...state,
                actionWithCreateIncidentForm: 'Обновить',
                incidentID: action.value
            }
        default:
            return state;
    }
}

export default incidentsReducer;