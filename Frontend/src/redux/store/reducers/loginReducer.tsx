import {LOGIN, LOGOUT, UPDATE_VALUES_LOGIN_FORM} from "../actions/actionTypes";
import {LoginType} from "../actions/Types/loginTypes";

const initialState = {
    fullname: '',
    isAuth: false,
    login: '',
    password: '',
    token: '',
    userId: ''
}

type InitialStateType = typeof initialState;

function loginReducer(state = initialState, action: LoginType): InitialStateType {
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
                ...action.updatedValueLoginForm
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