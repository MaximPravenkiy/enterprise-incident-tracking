import moment from 'moment';
import {
    POST_REGISTRATION,
    REGISTRATION,
    RESET_REGISTRATION_FORM,
    UPDATE_VALUES_REGISTRATION_FORM
} from 'redux/store/actions/actionTypes';

export type RegistrationInitialStateType = typeof initialState;

export type PostRegistrationActionType = {
    type: typeof POST_REGISTRATION;
    registrationFormValues: RegistrationInitialStateType;
};

export type UpdateValuesRegistrationFormActionType = {
    type: typeof UPDATE_VALUES_REGISTRATION_FORM;
    updatedValueRegistrationForm: RegistrationInitialStateType;
};

export type RegistrationActionType = {
    type: typeof REGISTRATION;
};

export type ResetRegistrationFormActionType = {
    type: typeof RESET_REGISTRATION_FORM;
};

export type RegistrationType =
    | PostRegistrationActionType
    | UpdateValuesRegistrationFormActionType
    | RegistrationActionType
    | ResetRegistrationFormActionType;

const initialState = {
    dateOfBirth: null as null | moment.Moment,
    fullname: '',
    login: '',
    password: '',
    position: ''
};

function registrationReducer(
    state = initialState,
    action: RegistrationType
): RegistrationInitialStateType {
    switch (action.type) {
        case UPDATE_VALUES_REGISTRATION_FORM:
            return {
                ...state,
                ...action.updatedValueRegistrationForm
            };
        case RESET_REGISTRATION_FORM:
            return {
                ...initialState
            };
        default:
            return state;
    }
}

export default registrationReducer;
