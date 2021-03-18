import {CHANGE_ASSIGNEE_USER_ID, GET_INCIDENTS, GET_USERS} from '../actions/actionTypes';

const initialState = {
    initLoading: false,
    loading: false,
    users: [],
    list: [{}, {}, {}],
    assigneeUserId: ''
}

function incidentsReducer(state = initialState, action: any) {
    switch (action.type) {
        case GET_INCIDENTS:
            return {

            };
        case GET_USERS:
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