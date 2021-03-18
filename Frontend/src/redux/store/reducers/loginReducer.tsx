import {LOGIN, LOGOUT} from "../actions/actionTypes";

const initialState = {
    isAuth: false,
    fullname: '',
    token: '',
    userId: ''
}

function loginReducer(state = initialState, action: any) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuth: true,
                ...action.userData
            }
        case LOGOUT:
            return {
                ...state,
                isAuth: false
            }
        default:
            return state;
    }
}

export default loginReducer;