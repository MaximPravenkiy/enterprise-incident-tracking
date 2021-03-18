import {GET_INCIDENTS} from '../actions/actionTypes';

const initialState = {
    initLoading: false,
    loading: false,
    data: [],
    list: [{}, {}, {}],
}

function incidentsReducer(state = initialState, action: any) {
    switch (action.type) {
        case GET_INCIDENTS:
            return {

            }
        default:
            return state;
    }
}

export default incidentsReducer;