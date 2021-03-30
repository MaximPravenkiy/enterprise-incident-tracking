import {
    CHANGE_ASSIGNEE_USER_ID,
    CLOSE_MODAL, RESET_CREATE_INCIDENT_FORM, SET_DATA_FOR_UPDATING,
    SET_INCIDENTS,
    SET_USERS,
    UPDATE_VALUES_CREATE_INCIDENT_FORM
} from '../actions/actionTypes';
import moment from "moment";
import {IncidentsType} from "../actions/Types/incidentsTypes";

export function getDate(date = new Date() as Date | moment.Moment): moment.Moment {
    return moment(date, 'YYYY-MM-DD').utc(true);
}

export type ListOfIncidentsTypes = ValuesCreateIncidentFormTypes & {
    icon: JSX.Element
    key: string
}

export type ValuesCreateIncidentFormTypes = {
    area: string
    assignee: string
    description: string
    dueDate: moment.Moment
    incidentName: string
    priority: string
    startDate: moment.Moment
    status: string
}

export type UsersTypes = {
    id: string
    label: string
    value: string
    key: string
}

export type CreateIncidentTypes = ValuesCreateIncidentFormTypes & {
    owner?: string,
}

export type actionWithCreateIncidentFormType = 'Создать' | 'Обновить'

const initialState = {
    actionWithCreateIncidentForm: 'Создать' as actionWithCreateIncidentFormType,
    assigneeUserId: '',
    incidentID: '',
    isModalVisible: false,
    listOfIncidents: [] as Array<ListOfIncidentsTypes>,
    users: [] as Array<UsersTypes>,
    valuesCreateIncidentForm: {
        area: '',
        assignee: '',
        description: '',
        dueDate: getDate(),
        incidentName: '',
        priority: '',
        startDate: getDate(),
        status: ''
    } as ValuesCreateIncidentFormTypes
}

export type IncidentsInitialStateType = typeof initialState;

function incidentsReducer(state = initialState, action: IncidentsType)
    : IncidentsInitialStateType {
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
                    ...action.updatedValue
                },
            };
        case SET_DATA_FOR_UPDATING:
            return {
                ...state,
                actionWithCreateIncidentForm: 'Обновить',
                incidentID: action.incidentID
            }
        case RESET_CREATE_INCIDENT_FORM:
            return {
                ...state,
                actionWithCreateIncidentForm: initialState.actionWithCreateIncidentForm,
                incidentID: initialState.incidentID,
                valuesCreateIncidentForm: initialState.valuesCreateIncidentForm
            }
        default:
            return state;
    }
}

export default incidentsReducer;