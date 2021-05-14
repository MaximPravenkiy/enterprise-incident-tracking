import { Moment } from 'moment';
import { RegistrationActions } from 'redux/actions/registration/registration.interfaces';
import { ValuesRegistrationForm } from 'common/types/registration';
import {
    RESET_REGISTRATION_FORM,
    UPDATE_VALUES_REGISTRATION_FORM
} from 'redux/actions/registration/registration.actions';

interface RegistrationInitialState {
    valuesRegistrationForm: ValuesRegistrationForm;
}

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
    action: RegistrationActions
): RegistrationInitialState {
    switch (action.type) {
        case UPDATE_VALUES_REGISTRATION_FORM:
            return {
                valuesRegistrationForm: {
                    ...state.valuesRegistrationForm,
                    ...action.payload.updatedValueRegistrationForm
                }
            };
        case RESET_REGISTRATION_FORM:
            return {
                valuesRegistrationForm: initialState.valuesRegistrationForm
            };
        default:
            return state;
    }
}

export default registrationReducer;
