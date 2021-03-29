import moment from "moment";
import {RESET_REGISTRATION_FORM, UPDATE_VALUES_REGISTRATION_FORM} from "../actions/actionTypes";
import {RegistrationType} from "../actions/Types/registrationType";

const initialState = {
    dateOfBirth: null as null | moment.Moment,
    fullname: '',
    login: '',
    password: '',
    position: ''
}

export type RegistrationInitialStateType = typeof initialState;

function registrationReducer(state = initialState, action: RegistrationType)
    : RegistrationInitialStateType {
    switch (action.type) {
        case UPDATE_VALUES_REGISTRATION_FORM:
            return {
                ...state,
                ...action.updatedValueRegistrationForm,
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