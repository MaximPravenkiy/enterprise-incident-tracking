import {RESET_REGISTRATION_FORM, UPDATE_VALUES_REGISTRATION_FORM} from "../actions/actionTypes";

const initialState = {
    dateOfBirth: '',
    fullname: '',
    login: '',
    password: '',
    position: ''
}

function registrationReducer(state = initialState, action: any): object {
    switch (action.type) {
        case UPDATE_VALUES_REGISTRATION_FORM:
            return {
                ...state,
                ...action.values
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