import { Moment } from 'moment';
import { RegistrationType } from 'redux/actions/registration/registration.interfaces';
import { ValuesRegistrationForm } from 'common/types/registration';
import {
    RESET_REGISTRATION_FORM,
    UPDATE_VALUES_REGISTRATION_FORM
} from '../actions/registration/registration.actions';

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
                    ...action.payload.updatedValueRegistrationForm
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
