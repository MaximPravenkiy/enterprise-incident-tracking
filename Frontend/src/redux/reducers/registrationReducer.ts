import { Moment } from 'moment';
import {
    RESET_REGISTRATION_FORM,
    UPDATE_VALUES_REGISTRATION_FORM
} from 'redux/actions/actionTypes';
import { RegistrationType } from 'redux/actions/registration/interfaces';
import { ValuesRegistrationForm } from 'common/types/registration';

type RegistrationInitialStateType = typeof initialState;

const initialState = {
    valuesRegistrationForm: {
        dateOfBirth: null as null | Moment,
        fullname: '',
        login: '',
        password: '',
        position: ''
    } as ValuesRegistrationForm
};

function registrationReducer(
    state = initialState,
    action: RegistrationType
): RegistrationInitialStateType {
    switch (action.type) {
        case UPDATE_VALUES_REGISTRATION_FORM:
            return {
                ...state,
                valuesRegistrationForm: {
                    ...state.valuesRegistrationForm,
                    ...action.updatedValueRegistrationForm
                }
            };
        case RESET_REGISTRATION_FORM:
            return {
                ...state,
                valuesRegistrationForm: initialState.valuesRegistrationForm
            };
        default:
            return state;
    }
}

export default registrationReducer;
