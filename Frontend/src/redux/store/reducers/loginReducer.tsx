import {LOGIN, LOGOUT, UPDATE_VALUES_LOGIN_FORM} from "../actions/actionTypes";

const initialState = {
    fullname: '',
    isAuth: false,
    login: '',
    password: '',
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
            };
        case UPDATE_VALUES_LOGIN_FORM:
            return {
                ...state,
                ...action.values
            } ;
        case LOGOUT:
            return {
                ...state,
                isAuth: false
            };
        default:
            return state;
    }
}

export default loginReducer;