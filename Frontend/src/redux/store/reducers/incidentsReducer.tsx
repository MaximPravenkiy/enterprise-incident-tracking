import moment from 'moment';
import {
    CHANGE_ACTION_WITH_LIST_OF_INCIDENTS,
    CHANGE_ASSIGNEE_USER_ID,
    CLOSE_MODAL,
    CREATE_INCIDENT,
    DELETE_INCIDENT,
    GET_INCIDENTS,
    GET_USERS,
    RESET_CREATE_INCIDENT_FORM,
    SET_DATA_FOR_UPDATING,
    SET_INCIDENTS,
    SET_USERS,
    UPDATE_INCIDENT,
    UPDATE_LOADER,
    UPDATE_VALUES_CREATE_INCIDENT_FORM
} from 'redux/store/actions/actionTypes';

export function getDate(
    date = new Date() as Date | moment.Moment
): moment.Moment {
    return moment(date, 'YYYY-MM-DD').utc(true);
}

export type SetIncidentsActionType = {
    type: typeof SET_INCIDENTS;
    listOfIncidents: Array<ListOfIncidentsTypes>;
};

export type CreateIncidentActionType = {
    type: typeof CREATE_INCIDENT;
    valuesCreateIncidentForm: ValuesCreateIncidentFormTypes;
};

export type DeleteIncidentActionType = {
    type: typeof DELETE_INCIDENT;
    incidentID: string;
};

export type CloseModalActionType = {
    type: typeof CLOSE_MODAL;
};

export type UpdateValuesCreateIncidentFormActionType = {
    type: typeof UPDATE_VALUES_CREATE_INCIDENT_FORM;
    updatedValue: ValuesCreateIncidentFormTypes;
};

export type SetDataForUpdatingActionType = {
    type: typeof SET_DATA_FOR_UPDATING;
    incidentID: string;
};

export type UpdateIncidentActionType = {
    type: typeof UPDATE_INCIDENT;
    updateData: {
        incidentID: string;
        incidentFormData: CreateIncidentTypes;
    };
};

export type ResetCreateIncidentFormActionType = {
    type: typeof RESET_CREATE_INCIDENT_FORM;
};

export type GetUsersActionType = {
    type: typeof GET_USERS;
};

export type SetUsersActionType = {
    type: typeof SET_USERS;
    users: Array<UsersTypes>;
};

export type ChangeAssigneeUserIdActionType = {
    type: typeof CHANGE_ASSIGNEE_USER_ID;
    assigneeUserId: string;
};

export type GetIncidentsActionType = {
    type: typeof GET_INCIDENTS;
};

export type UpdateLoaderActionType = {
    type: typeof UPDATE_LOADER;
    isListOfIncidentsLoading: boolean;
};

export type ChangeActionWithListOfIncidentsActionType = {
    type: typeof CHANGE_ACTION_WITH_LIST_OF_INCIDENTS;
    actionWithIncidents: ActionWithIncidentsType;
};

export type IncidentsType =
    | SetIncidentsActionType
    | CreateIncidentActionType
    | DeleteIncidentActionType
    | CloseModalActionType
    | UpdateValuesCreateIncidentFormActionType
    | SetDataForUpdatingActionType
    | UpdateIncidentActionType
    | ResetCreateIncidentFormActionType
    | GetUsersActionType
    | SetUsersActionType
    | ChangeAssigneeUserIdActionType
    | GetIncidentsActionType
    | UpdateLoaderActionType
    | ChangeActionWithListOfIncidentsActionType;

export type ListOfIncidentsTypes = ValuesCreateIncidentFormTypes & {
    icon: JSX.Element;
    key: string;
    owner: string;
};

export type ValuesCreateIncidentFormTypes = {
    area: string;
    assignee: string;
    description: string;
    dueDate: moment.Moment;
    incidentName: string;
    priority: string;
    startDate: moment.Moment;
    status: string;
};

export type UsersTypes = {
    id: string;
    label: string;
    value: string;
    key: string;
};

export type CreateIncidentTypes = ValuesCreateIncidentFormTypes & {
    owner?: string;
};

export type ActionWithCreateIncidentFormType = 'Создать' | 'Обновить';
export type ActionWithIncidentsType =
    | 'Показать все инциденты'
    | 'Показать мои инциденты';

const initialState = {
    actionWithCreateIncidentForm: 'Создать' as ActionWithCreateIncidentFormType,
    actionWithIncidents: 'Показать все инциденты' as ActionWithIncidentsType,
    assigneeUserId: '',
    incidentID: '',
    isModalVisible: false,
    listOfIncidents: [] as Array<ListOfIncidentsTypes>,
    isListOfIncidentsLoading: false,
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
};

export type IncidentsInitialStateType = typeof initialState;

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
