import {RESET_REGISTRATION_FORM, UPDATE_VALUES_REGISTRATION_FORM} from "../actions/actionTypes";

const initialState = {
    dateOfBirth: '',
    fullname: '',
    login: '',
    password: '',
    position: ''
}

type InitialStateType = typeof initialState;

function registrationReducer(state = initialState, action: any): InitialStateType {
    switch (action.type) {
        case UPDATE_VALUES_REGISTRATION_FORM:
            return {
                ...state,
                ...action.values,
                qwe: 123
            };
        case RESET_REGISTRATION_FORM:
            return  {
                ...initialState
            }
        default:
            return state;
    }
}

export default registrationReducer;