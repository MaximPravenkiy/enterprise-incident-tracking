import {LOGIN, LOGOUT, UPDATE_VALUES_LOGIN_FORM} from "../actions/actionTypes";
import {LoginType} from "../actions/Types/loginTypes";

const initialState = {
    fullname: '',
    isAuth: false,
    login: '',
    password: '',
    remember: false,
    token: '',
    userId: ''
}

export type LoginFormValue = {
    login: string
    password: string
    remember?: boolean
}

export type UserDataType = {
    fullname: string
    token: string
    userId: string
}

export type LoginInitialStateType = typeof initialState;

function loginReducer(state = initialState, action: LoginType)
    : LoginInitialStateType {
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