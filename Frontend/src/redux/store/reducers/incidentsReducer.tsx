import {CHANGE_ASSIGNEE_USER_ID, SET_INCIDENTS, SET_USERS} from '../actions/actionTypes';

const initialState = {
    initLoading: false,
    loading: false,
    users: [],
    listOfIncidents: [{}],
    assigneeUserId: ''
}

function incidentsReducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_INCIDENTS:
            return {
                ...state,
                listOfIncidents: action.listOfIncidents
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case CHANGE_ASSIGNEE_USER_ID:
            return {
                ...state,
                assigneeUserId: action.assigneeUserId
            };
        default:
            return state;
    }
}

export default incidentsReducer;