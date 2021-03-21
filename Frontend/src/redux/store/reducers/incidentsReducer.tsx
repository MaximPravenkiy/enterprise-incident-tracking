import {CHANGE_ASSIGNEE_USER_ID, CLOSE_MODAL, SET_INCIDENTS, SET_USERS} from '../actions/actionTypes';

const initialState = {
    popUpMessage: '',
    isModalVisible: false,
    users: [],
    listOfIncidents: [{}],
    assigneeUserId: ''
}

function incidentsReducer(state = initialState, action: any) {
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
        default:
            return state;
    }
}

export default incidentsReducer;